/** Prisma-free pure helpers — unit-test edilebilir. */

import {
  LEAGUE_DEMOTE_COUNT,
  LEAGUE_MAX_TIER,
  LEAGUE_PROMOTE_COUNT,
} from "@/data/leagues";

/** Pazartesi 00:00 UTC — içinde bulunulan haftanın başı. */
export function getWeekStartUtc(now: Date = new Date()): Date {
  const d = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const dayIso = (d.getUTCDay() + 6) % 7; // 0=Mon..6=Sun
  d.setUTCDate(d.getUTCDate() - dayIso);
  return d;
}

/** weekStart + 7 gün — bir sonraki haftanın başı. */
export function nextWeekStartUtc(weekStart: Date): Date {
  const d = new Date(weekStart);
  d.setUTCDate(d.getUTCDate() + 7);
  return d;
}

export type LeagueOutcome = "promoted" | "demoted" | "stayed";

/**
 * Pure: rank + tier + weeklyXp'e göre outcome hesaplar.
 * - Top N + weeklyXp>0 + Elmas değilse → promoted
 * - Bottom M + Bronz değilse → demoted
 * - Değilse → stayed
 */
export function computeOutcome(params: {
  rank: number;
  totalMembers: number;
  tier: number;
  weeklyXp: number;
}): LeagueOutcome {
  const { rank, totalMembers, tier, weeklyXp } = params;
  const canPromote = tier < LEAGUE_MAX_TIER;
  const canDemote = tier > 0;

  if (rank <= LEAGUE_PROMOTE_COUNT && canPromote && weeklyXp > 0) {
    return "promoted";
  }
  if (rank > totalMembers - LEAGUE_DEMOTE_COUNT && canDemote) {
    return "demoted";
  }
  return "stayed";
}
