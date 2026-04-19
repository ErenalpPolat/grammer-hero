"use client";

import { useCallback, useState } from "react";

export interface HeartsState {
  hearts: number;
  max: number;
  isEmpty: boolean;
  isLow: boolean;
  /** Decrement hearts by 1, never below 0. Returns new value. */
  loseOne: () => number;
  /** Refill to max. */
  reset: () => void;
  /** Set hearts to exact value (clamped to [0, max]). */
  setHearts: (value: number) => void;
}

/**
 * Standalone hearts state machine. Used by quiz arena (via useLessonState) and
 * could be reused for any context that needs the 3-hearts mechanic — e.g.
 * a global daily hearts pool, a heart-refill timer, etc.
 *
 * Note: For lesson quizzes this is embedded inside `useLessonState` to keep
 * the lesson reducer atomic. This hook is for standalone usage.
 */
export function useHearts(initial = 3, max = 3): HeartsState {
  const [hearts, setHeartsRaw] = useState(() => Math.max(0, Math.min(max, initial)));

  const setHearts = useCallback(
    (value: number) => setHeartsRaw(Math.max(0, Math.min(max, value))),
    [max],
  );
  const loseOne = useCallback(() => {
    let next = hearts;
    setHeartsRaw((h) => {
      next = Math.max(0, h - 1);
      return next;
    });
    return next;
  }, [hearts]);
  const reset = useCallback(() => setHeartsRaw(max), [max]);

  return {
    hearts,
    max,
    isEmpty: hearts === 0,
    isLow: hearts > 0 && hearts <= 1,
    loseOne,
    reset,
    setHearts,
  };
}
