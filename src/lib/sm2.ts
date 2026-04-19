/**
 * SuperMemo SM-2 algoritması (Wozniak, 1985).
 *
 * Quality (q) 0-5:
 * 0 = blackout
 * 1 = wrong (zor hatırladım sonunda)
 * 2 = wrong (kolay hatırlama)
 * 3 = correct (zorlukla)
 * 4 = correct (tereddüt)
 * 5 = perfect
 *
 * Yeni interval (gün):
 * - q < 3 → tekrarları sıfırla, interval=1 (yarın tekrar)
 * - q >= 3:
 *   - n=1 → 1 gün
 *   - n=2 → 6 gün
 *   - n>=3 → previousInterval * EF
 *
 * EF güncellemesi:
 * EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
 * minimum 1.3
 */

export type ReviewQuality = "again" | "hard" | "easy" | "perfect";

export const QUALITY_TO_NUMERIC: Record<ReviewQuality, number> = {
  again: 1,
  hard: 3,
  easy: 4,
  perfect: 5,
};

export interface SM2State {
  easinessFactor: number;
  interval: number;
  repetitions: number;
}

export interface SM2Result extends SM2State {
  /** Days until next review */
  nextIntervalDays: number;
}

export function applySM2(state: SM2State, quality: ReviewQuality): SM2Result {
  const q = QUALITY_TO_NUMERIC[quality];
  let { easinessFactor, interval, repetitions } = state;

  if (q < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    repetitions = repetitions + 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.round(interval * easinessFactor);
  }

  // Easiness factor update (always applied)
  const efDelta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02);
  easinessFactor = Math.max(1.3, easinessFactor + efDelta);

  return {
    easinessFactor: Number(easinessFactor.toFixed(3)),
    interval,
    repetitions,
    nextIntervalDays: interval,
  };
}
