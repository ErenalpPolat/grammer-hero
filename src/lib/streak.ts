import { startOfDay } from "./date";

/**
 * Compute new streak given last activity date, today, and current streak.
 * - No prior activity → 1
 * - Same day → unchanged
 * - Consecutive day (gap=1) → +1
 * - Gap > 1 day → 1 (reset)
 */
export function computeNewStreak(
  lastDate: Date | null | undefined,
  today: Date,
  current: number,
): number {
  if (!lastDate) return 1;
  const last = startOfDay(lastDate).getTime();
  const todayStart = startOfDay(today).getTime();
  const diffDays = Math.round((todayStart - last) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return Math.max(1, current);
  if (diffDays === 1) return current + 1;
  return 1;
}
