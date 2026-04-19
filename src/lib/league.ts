import { Prisma } from "@/generated/prisma";
import {
  LEAGUE_GROUP_SIZE,
  LEAGUE_MAX_TIER,
  LEAGUE_PODIUM_GEMS,
  getTier,
  type LeagueTier,
} from "@/data/leagues";
import { computeOutcome, getWeekStartUtc, nextWeekStartUtc } from "@/lib/league-math";
import { prisma } from "@/lib/prisma";

type Tx = Prisma.TransactionClient;

// Re-export pure helpers for convenience
export { computeOutcome, getWeekStartUtc, nextWeekStartUtc };
export type { LeagueOutcome } from "@/lib/league-math";

// ─── Write path (called from quiz completion) ─────────────────────────────

async function ensureCurrentMembership(
  tx: Tx,
  userId: string,
  tier: number,
  weekStart: Date,
): Promise<{ membershipId: string }> {
  const existing = await tx.leagueMembership.findFirst({
    where: { userId, group: { weekStart } },
    select: { id: true },
  });
  if (existing) return { membershipId: existing.id };

  const openGroups = await tx.leagueGroup.findMany({
    where: { tier, weekStart, finalizedAt: null },
    select: { id: true, _count: { select: { members: true } } },
    orderBy: { createdAt: "asc" },
  });
  const open = openGroups.find((g) => g._count.members < LEAGUE_GROUP_SIZE);

  const groupId =
    open?.id ??
    (
      await tx.leagueGroup.create({
        data: { tier, weekStart },
        select: { id: true },
      })
    ).id;

  const membership = await tx.leagueMembership.create({
    data: { groupId, userId },
    select: { id: true },
  });
  return { membershipId: membership.id };
}

/**
 * Bir grubu finalize eder — sıralar, outcome yazar, tier'ı günceller, podium
 * gemlerini dağıtır. İdempotent (finalizedAt zaten doluysa no-op).
 */
export async function finalizeGroup(tx: Tx, groupId: string): Promise<void> {
  const group = await tx.leagueGroup.findUnique({
    where: { id: groupId },
    select: {
      id: true,
      tier: true,
      finalizedAt: true,
      members: {
        select: { id: true, userId: true, weeklyXp: true, joinedAt: true },
      },
    },
  });
  if (!group || group.finalizedAt) return;

  const sorted = [...group.members].sort((a, b) => {
    if (b.weeklyXp !== a.weeklyXp) return b.weeklyXp - a.weeklyXp;
    return a.joinedAt.getTime() - b.joinedAt.getTime();
  });
  const n = sorted.length;

  for (let i = 0; i < n; i++) {
    const m = sorted[i];
    const rank = i + 1;
    const outcome = computeOutcome({
      rank,
      totalMembers: n,
      tier: group.tier,
      weeklyXp: m.weeklyXp,
    });

    const podiumGems = LEAGUE_PODIUM_GEMS[rank] ?? 0;

    await tx.leagueMembership.update({
      where: { id: m.id },
      data: { finalRank: rank, outcome },
    });

    if (outcome === "promoted") {
      await tx.user.update({
        where: { id: m.userId },
        data: {
          leagueTier: { increment: 1 },
          gems: { increment: podiumGems },
        },
      });
    } else if (outcome === "demoted") {
      await tx.user.update({
        where: { id: m.userId },
        data: { leagueTier: { decrement: 1 } },
      });
    } else if (podiumGems > 0) {
      // Elmas'ta top 3 stay + podium gem
      await tx.user.update({
        where: { id: m.userId },
        data: { gems: { increment: podiumGems } },
      });
    }
  }

  await tx.leagueGroup.update({
    where: { id: groupId },
    data: { finalizedAt: new Date() },
  });
}

async function finalizePastGroupsForUser(
  tx: Tx,
  userId: string,
  currentWeekStart: Date,
): Promise<void> {
  const stale = await tx.leagueMembership.findMany({
    where: {
      userId,
      group: { finalizedAt: null, weekStart: { lt: currentWeekStart } },
    },
    select: { groupId: true },
  });
  for (const { groupId } of stale) {
    await finalizeGroup(tx, groupId);
  }
}

/**
 * Quiz sonrası çağrılır. 1) bekleyen finalize'ları yapar (kullanıcı tier'ını
 * günceller) 2) current-week membership'i ensure edip weeklyXp += xpEarned.
 */
export async function addLeagueXp(
  tx: Tx,
  userId: string,
  xpEarned: number,
): Promise<void> {
  if (xpEarned <= 0) return;
  const weekStart = getWeekStartUtc();

  await finalizePastGroupsForUser(tx, userId, weekStart);

  const user = await tx.user.findUnique({
    where: { id: userId },
    select: { leagueTier: true },
  });
  if (!user) return;

  const { membershipId } = await ensureCurrentMembership(
    tx,
    userId,
    user.leagueTier,
    weekStart,
  );

  await tx.leagueMembership.update({
    where: { id: membershipId },
    data: { weeklyXp: { increment: xpEarned } },
  });
}

// ─── Read path (leaderboard page) ─────────────────────────────────────────

export interface LeagueStanding {
  userId: string;
  name: string;
  weeklyXp: number;
  rank: number;
  isSelf: boolean;
}

export interface UserLeagueStatus {
  tier: LeagueTier;
  standings: LeagueStanding[];
  selfRank: number | null;
  daysRemaining: number;
  groupId: string | null;
  inGroup: boolean;
}

export async function getUserLeagueStatus(
  userId: string,
): Promise<UserLeagueStatus> {
  const weekStart = getWeekStartUtc();

  // Okuma öncesi stale finalize'ları temizle (kullanıcı tier'ı değişebilir)
  await prisma.$transaction(async (tx) => {
    await finalizePastGroupsForUser(tx, userId, weekStart);
  });

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { leagueTier: true },
  });

  const now = new Date();
  const nextWeek = nextWeekStartUtc(weekStart);
  const diffMs = nextWeek.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  const tier = getTier(user?.leagueTier ?? 0);

  const membership = await prisma.leagueMembership.findFirst({
    where: { userId, group: { weekStart } },
    select: { groupId: true },
  });

  if (!membership) {
    return {
      tier,
      standings: [],
      selfRank: null,
      daysRemaining,
      groupId: null,
      inGroup: false,
    };
  }

  const members = await prisma.leagueMembership.findMany({
    where: { groupId: membership.groupId },
    include: { user: { select: { name: true } } },
    orderBy: [{ weeklyXp: "desc" }, { joinedAt: "asc" }],
  });

  const standings: LeagueStanding[] = members.map((m, i) => ({
    userId: m.userId,
    name: m.user.name,
    weeklyXp: m.weeklyXp,
    rank: i + 1,
    isSelf: m.userId === userId,
  }));

  const selfRank = standings.find((s) => s.isSelf)?.rank ?? null;

  return {
    tier,
    standings,
    selfRank,
    daysRemaining,
    groupId: membership.groupId,
    inGroup: true,
  };
}

// ─── Pending promotion result (modal) ─────────────────────────────────────

export interface PendingLeagueResult {
  membershipId: string;
  outcome: "promoted" | "demoted" | "stayed";
  finalRank: number;
  fromTier: number;
  toTier: number;
  podiumGems: number;
}

export async function getPendingLeagueResult(
  userId: string,
): Promise<PendingLeagueResult | null> {
  const pending = await prisma.leagueMembership.findFirst({
    where: { userId, notifiedAt: null, outcome: { not: null } },
    orderBy: { joinedAt: "desc" },
    include: { group: { select: { tier: true } } },
  });
  if (!pending || !pending.outcome || pending.finalRank == null) return null;

  const fromTier = pending.group.tier;
  const toTier =
    pending.outcome === "promoted"
      ? Math.min(LEAGUE_MAX_TIER, fromTier + 1)
      : pending.outcome === "demoted"
        ? Math.max(0, fromTier - 1)
        : fromTier;

  return {
    membershipId: pending.id,
    outcome: pending.outcome as "promoted" | "demoted" | "stayed",
    finalRank: pending.finalRank,
    fromTier,
    toTier,
    podiumGems: LEAGUE_PODIUM_GEMS[pending.finalRank] ?? 0,
  };
}

export async function markLeagueResultNotified(
  membershipId: string,
  userId: string,
): Promise<void> {
  await prisma.leagueMembership.updateMany({
    where: { id: membershipId, userId },
    data: { notifiedAt: new Date() },
  });
}
