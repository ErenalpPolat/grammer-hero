"use client";

import type { FindMistakeExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface FindMistakeProps {
  exercise: FindMistakeExercise;
  /** Index of the token the user clicked */
  answer: number | null;
  onAnswerChange: (idx: number) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

export function FindMistake({
  exercise,
  answer,
  onAnswerChange,
  locked,
  feedback,
}: FindMistakeProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
      <p className="text-sm text-muted-foreground">
        Cümledeki hatalı kelimeyi bul ve tıkla:
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg border-2 border-border bg-card p-6">
        {exercise.tokens.map((token, i) => {
          const selected = answer === i;
          const isWrongTokenAnswer = feedback != null && i === exercise.wrongIndex;
          const isWrongPick = feedback != null && selected && !feedback.correct;
          return (
            <button
              key={i}
              type="button"
              onClick={() => !locked && onAnswerChange(i)}
              disabled={locked}
              aria-pressed={selected}
              className={cn(
                "rounded-md border-2 px-3 py-2 text-base font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                !locked && "hover:-translate-y-0.5 hover:border-primary",
                selected && !feedback && "border-primary bg-primary/10 text-primary",
                !selected && !feedback && "border-border bg-card",
                isWrongTokenAnswer && "border-correct bg-correct/10 text-correct",
                isWrongPick && "border-incorrect bg-incorrect/10 text-incorrect",
              )}
            >
              {token}
            </button>
          );
        })}
      </div>

      {exercise.hint && !locked && (
        <p className="text-center text-sm text-muted-foreground">💡 {exercise.hint}</p>
      )}
    </div>
  );
}
