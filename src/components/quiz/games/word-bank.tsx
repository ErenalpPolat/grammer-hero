"use client";

import { useMemo } from "react";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WordBankExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface WordBankProps {
  exercise: WordBankExercise;
  /** Ordered list of words the user has picked (grader-compatible) */
  answer: string[] | null;
  onAnswerChange: (tokens: string[]) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

/** Deterministic shuffle using seed-like key (stable across renders) */
function shuffle<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function WordBank({ exercise, answer, onAnswerChange, locked, feedback }: WordBankProps) {
  const pool = useMemo(() => {
    const all = [...exercise.tokens, ...(exercise.distractors ?? [])];
    return shuffle(all, exercise.id);
  }, [exercise.id, exercise.tokens, exercise.distractors]);

  const picks = useMemo(() => answer ?? [], [answer]);

  // Which pool indices are currently used by picks (handles duplicates left-to-right)
  const usedPoolIndices = useMemo(() => {
    const used = new Set<number>();
    for (const word of picks) {
      for (let i = 0; i < pool.length; i++) {
        if (pool[i] === word && !used.has(i)) {
          used.add(i);
          break;
        }
      }
    }
    return used;
  }, [picks, pool]);

  const addWord = (poolIdx: number) => {
    if (locked || usedPoolIndices.has(poolIdx)) return;
    onAnswerChange([...picks, pool[poolIdx]]);
  };

  const removeWord = (pickIdx: number) => {
    if (locked) return;
    onAnswerChange(picks.filter((_, i) => i !== pickIdx));
  };

  const clearAll = () => {
    if (locked) return;
    onAnswerChange([]);
  };

  const isWrongSlot = (i: number): boolean =>
    feedback != null && !feedback.correct && picks[i] !== exercise.tokens[i];

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{exercise.prompt ?? "Cümleyi sıraya koy:"}</p>
        {exercise.translation && (
          <p className="text-lg font-medium italic text-muted-foreground">
            &ldquo;{exercise.translation}&rdquo;
          </p>
        )}
      </div>

      {/* Answer slots */}
      <div className="min-h-24 rounded-lg border-2 border-dashed border-border bg-muted/30 p-3">
        {picks.length === 0 ? (
          <p className="py-4 text-center text-sm text-muted-foreground">
            Aşağıdan kelime seç…
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {picks.map((word, i) => (
              <button
                key={`pick-${i}`}
                type="button"
                onClick={() => removeWord(i)}
                disabled={locked}
                className={cn(
                  "rounded-md border-2 bg-card px-3 py-2 text-sm font-medium shadow-sm transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  !locked && "hover:bg-muted",
                  !feedback && "border-primary/40",
                  feedback?.correct && "border-correct bg-correct/10",
                  feedback && !feedback.correct && isWrongSlot(i) && "border-incorrect bg-incorrect/10",
                )}
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pool */}
      <div className="flex flex-wrap items-center gap-2">
        {pool.map((word, i) => {
          const used = usedPoolIndices.has(i);
          return (
            <button
              key={`pool-${i}`}
              type="button"
              onClick={() => addWord(i)}
              disabled={locked || used}
              className={cn(
                "rounded-md border-2 border-border bg-card px-3 py-2 text-sm font-medium shadow-button transition-all",
                "[--button-shadow:var(--neutral-300)] dark:[--button-shadow:var(--neutral-700)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                used
                  ? "opacity-20"
                  : !locked && "hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-button-pressed",
              )}
              aria-hidden={used}
            >
              {word}
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
