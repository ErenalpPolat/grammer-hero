"use client";

import { useMemo } from "react";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WordScrambleExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface WordScrambleProps {
  exercise: WordScrambleExercise;
  /** User's currently picked letters as a string */
  answer: string | null;
  onAnswerChange: (assembled: string) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

/** Deterministic shuffle of letters (stable across renders) */
function shuffleLetters(word: string, seed: string): string[] {
  const arr = word.split("");
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  for (let i = arr.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const j = h % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Avoid showing the answer pre-arranged on first render
  if (arr.join("") === word && word.length > 1) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
}

export function WordScramble({
  exercise,
  answer,
  onAnswerChange,
  locked,
  feedback,
}: WordScrambleProps) {
  const target = exercise.answer;
  const pool = useMemo(() => shuffleLetters(target, exercise.id), [target, exercise.id]);
  const picks = useMemo(() => (answer ?? "").split(""), [answer]);

  // Track which pool indices are used (left-to-right matching for repeats)
  const usedPoolIndices = useMemo(() => {
    const used = new Set<number>();
    for (const ch of picks) {
      for (let i = 0; i < pool.length; i++) {
        if (pool[i] === ch && !used.has(i)) {
          used.add(i);
          break;
        }
      }
    }
    return used;
  }, [picks, pool]);

  const addLetter = (poolIdx: number) => {
    if (locked || usedPoolIndices.has(poolIdx) || picks.length >= target.length) return;
    onAnswerChange([...picks, pool[poolIdx]].join(""));
  };

  const removeLetter = (slotIdx: number) => {
    if (locked) return;
    const next = picks.filter((_, i) => i !== slotIdx);
    onAnswerChange(next.join(""));
  };

  const clearAll = () => {
    if (locked) return;
    onAnswerChange("");
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Harfleri sıraya koy:</p>
        {exercise.hint && (
          <p className="text-lg font-medium italic text-muted-foreground">
            💡 {exercise.hint}
          </p>
        )}
      </div>

      {/* Slots */}
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: target.length }).map((_, i) => {
          const ch = picks[i];
          const filled = ch != null;
          return (
            <button
              key={i}
              type="button"
              onClick={() => filled && removeLetter(i)}
              disabled={locked || !filled}
              className={cn(
                "flex size-12 items-center justify-center rounded-md border-2 text-xl font-bold uppercase",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                filled && !feedback && "border-primary bg-primary/10 text-primary",
                !filled && "border-dashed border-border bg-muted/30 text-muted-foreground",
                feedback?.correct && "border-correct bg-correct/10 text-correct",
                feedback && !feedback.correct && filled && "border-incorrect bg-incorrect/10 text-incorrect",
              )}
            >
              {ch ?? ""}
            </button>
          );
        })}
      </div>

      {/* Pool */}
      <div className="flex flex-wrap justify-center gap-2">
        {pool.map((ch, i) => {
          const used = usedPoolIndices.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => addLetter(i)}
              disabled={locked || used}
              className={cn(
                "flex size-12 items-center justify-center rounded-md border-2 border-border bg-card text-xl font-bold uppercase shadow-button",
                "[--button-shadow:var(--neutral-300)] dark:[--button-shadow:var(--neutral-700)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                used
                  ? "opacity-20"
                  : !locked && "hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-button-pressed",
              )}
              aria-hidden={used}
            >
              {ch}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAll}
          disabled={locked || picks.length === 0}
        >
          <Undo2 className="size-4" /> Temizle
        </Button>
      </div>
    </div>
  );
}
