/**
 * XP kaynakları (peppy-frog §7.1):
 * - Doğru cevap: +10 XP
 * - Dersi tamamla (>= 60% doğru): +50 XP bonus
 * - Perfect (0 can kaybı): +50 bonus
 * - Skip: -5 XP
 */
export const XP_PER_CORRECT = 10;
export const XP_COMPLETION_BONUS = 50;
export const XP_PERFECT_BONUS = 50;
export const XP_SKIP_PENALTY = 5;

export interface XpSummary {
  correctXp: number;
  completionBonus: number;
  perfectBonus: number;
  skipPenalty: number;
  total: number;
}

export function computeXp({
  correctCount,
  total,
  heartsLeft,
  heartsMax,
  skippedCount,
}: {
  correctCount: number;
  total: number;
  heartsLeft: number;
  heartsMax: number;
  skippedCount: number;
}): XpSummary {
  const accuracy = total > 0 ? correctCount / total : 0;
  const passed = accuracy >= 0.6;
  const perfect = heartsLeft === heartsMax;

  const correctXp = correctCount * XP_PER_CORRECT;
  const completionBonus = passed ? XP_COMPLETION_BONUS : 0;
  const perfectBonus = passed && perfect ? XP_PERFECT_BONUS : 0;
  const skipPenalty = skippedCount * XP_SKIP_PENALTY;

  return {
    correctXp,
    completionBonus,
    perfectBonus,
    skipPenalty,
    total: Math.max(0, correctXp + completionBonus + perfectBonus - skipPenalty),
  };
}

/** Map accuracy % to 0-3 stars (peppy-frog / page layouts §8). */
export function starsFromAccuracy(accuracyPct: number): 0 | 1 | 2 | 3 {
  if (accuracyPct >= 95) return 3;
  if (accuracyPct >= 80) return 2;
  if (accuracyPct >= 60) return 1;
  return 0;
}

/**
 * Level from total XP. Simple linear scaling: every 1000 XP = 1 level.
 * Level 1 is the starting level (0-999 XP).
 */
export function levelFromXp(totalXp: number): number {
  return Math.max(1, 1 + Math.floor(totalXp / 1000));
}

/** Gems earned for a completed quiz. */
export function gemsForQuiz(stars: 0 | 1 | 2 | 3): number {
  return [0, 5, 10, 15][stars];
}
