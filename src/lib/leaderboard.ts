import { addDays, startOfDay } from "@/lib/date";
import { prisma } from "@/lib/prisma";

export type LeaderboardWindow = "week" | "month" | "all";

export interface LeaderboardEntry {
  id: string;
  name: string;
  xp: number;
  streak: number;
  rank: number;
  isSelf?: boolean;
}

export const WINDOW_LABELS: Record<LeaderboardWindow, string> = {
  week: "bu hafta",
  month: "bu ay",
  all: "tüm zamanlar",
};

function windowStart(window: LeaderboardWindow): Date | null {
  if (window === "all") return null;
  const days = window === "week" ? 7 : 30;
  return startOfDay(addDays(new Date(), -days + 1));
}

/**
 * Top N users by XP in the given time window.
 * - `all` → User.totalXp (cumulative)
 * - `week` / `month` → SUM(GameAttempt.xpEarned) where completedAt >= cutoff
 *
 * If `selfUserId` is provided, the user's row is guaranteed to appear (appended
 * with computed rank if outside top N).
 */
export async function getLeaderboard({
  limit = 20,
  selfUserId,
  window = "all",
}: {
  limit?: number;
  selfUserId?: string;
  window?: LeaderboardWindow;
}): Promise<LeaderboardEntry[]> {
  if (window === "all") {
    return getAllTimeLeaderboard({ limit, selfUserId });
  }
  return getWindowedLeaderboard({ limit, selfUserId, since: windowStart(window)! });
}

async function getAllTimeLeaderboard({
  limit,
  selfUserId,
}: {
  limit: number;
  selfUserId?: string;
}): Promise<LeaderboardEntry[]> {
  const top = await prisma.user.findMany({
    take: limit,
    where: { totalXp: { gt: 0 } },
    orderBy: [{ totalXp: "desc" }, { createdAt: "asc" }],
    select: { id: true, name: true, totalXp: true, currentStreak: true },
  });

  const ranked: LeaderboardEntry[] = top.map((u, i) => ({
    id: u.id,
    name: u.name,
    xp: u.totalXp,
    streak: u.currentStreak,
    rank: i + 1,
    isSelf: u.id === selfUserId,
  }));

  if (selfUserId && !ranked.some((e) => e.isSelf)) {
    const self = await prisma.user.findUnique({
      where: { id: selfUserId },
      select: { id: true, name: true, totalXp: true, currentStreak: true },
    });
    if (self && self.totalXp > 0) {
      const ahead = await prisma.user.count({
        where: { totalXp: { gt: self.totalXp } },
      });
      ranked.push({
        id: self.id,
        name: self.name,
        xp: self.totalXp,
        streak: self.currentStreak,
        rank: ahead + 1,
        isSelf: true,
      });
    }
  }

  return ranked;
}

async function getWindowedLeaderboard({
  limit,
  selfUserId,
  since,
}: {
  limit: number;
  selfUserId?: string;
  since: Date;
}): Promise<LeaderboardEntry[]> {
  const aggregates = await prisma.gameAttempt.groupBy({
    by: ["userId"],
    where: { completedAt: { gte: since } },
    _sum: { xpEarned: true },
    orderBy: { _sum: { xpEarned: "desc" } },
    take: limit,
  });

  if (aggregates.length === 0 && !selfUserId) return [];

  const userIds = aggregates.map((a) => a.userId);
  const users = userIds.length
    ? await prisma.user.findMany({
        where: { id: { in: userIds } },
        select: { id: true, name: true, currentStreak: true },
      })
    : [];
  const userMap = new Map(users.map((u) => [u.id, u]));

  const ranked: LeaderboardEntry[] = aggregates.map((a, i) => {
    const user = userMap.get(a.userId);
    return {
      id: a.userId,
      name: user?.name ?? "—",
      xp: a._sum.xpEarned ?? 0,
      streak: user?.currentStreak ?? 0,
      rank: i + 1,
      isSelf: a.userId === selfUserId,
    };
  });

  // Append self row if outside top N
  if (selfUserId && !ranked.some((e) => e.isSelf)) {
    const selfAgg = await prisma.gameAttempt.aggregate({
      where: { userId: selfUserId, completedAt: { gte: since } },
      _sum: { xpEarned: true },
    });
    const selfXp = selfAgg._sum.xpEarned ?? 0;
    if (selfXp > 0) {
      const aheadGroups = await prisma.gameAttempt.groupBy({
        by: ["userId"],
        where: { completedAt: { gte: since } },
        _sum: { xpEarned: true },
        having: { xpEarned: { _sum: { gt: selfXp } } },
      });
      const self = await prisma.user.findUnique({
        where: { id: selfUserId },
        select: { name: true, currentStreak: true },
      });
      ranked.push({
        id: selfUserId,
        name: self?.name ?? "—",
        xp: selfXp,
        streak: self?.currentStreak ?? 0,
        rank: aheadGroups.length + 1,
        isSelf: true,
      });
    }
  }

  return ranked;
}
