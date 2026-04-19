"use client";

import { useEffect } from "react";
import type { MultipleChoiceExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface MultipleChoiceProps {
  exercise: MultipleChoiceExercise;
  answer: number | null;
  onAnswerChange: (idx: number) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

export function MultipleChoice({ exercise, answer, onAnswerChange, locked, feedback }: MultipleChoiceProps) {
  // Keyboard 1-4 → select option
  useEffect(() => {
    if (locked) return;
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const idx = Number.parseInt(e.key, 10);
      if (Number.isFinite(idx) && idx >= 1 && idx <= exercise.options.length) {
        onAnswerChange(idx - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [exercise.options.length, locked, onAnswerChange]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
      <p className="text-xl font-semibold leading-snug sm:text-2xl">{exercise.prompt}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {exercise.options.map((opt, i) => {
          const selected = answer === i;
          const isCorrectAnswer = feedback != null && i === exercise.answerIndex;
          const isWrongPick = feedback != null && selected && !feedback.correct;
          return (
            <button
              key={i}
              type="button"
              onClick={() => !locked && onAnswerChange(i)}
              disabled={locked}
              aria-pressed={selected}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg border-2 px-4 py-4 text-left text-base font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                !locked && "hover:-translate-y-0.5 hover:border-primary",
                selected && !feedback && "border-primary bg-primary/10",
                !selected && !feedback && "border-border bg-card",
                isCorrectAnswer && "border-correct bg-correct/10",
                isWrongPick && "border-incorrect bg-incorrect/10",
                locked && !isCorrectAnswer && !isWrongPick && "opacity-60",
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-md border-2 font-mono text-sm font-bold",
                  selected && !feedback && "border-primary bg-primary text-primary-foreground",
                  !selected && !feedback && "border-border text-muted-foreground",
                  isCorrectAnswer && "border-correct bg-correct text-white",
                  isWrongPick && "border-incorrect bg-incorrect text-white",
                )}
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>
      {!locked && <p className="text-xs text-muted-foreground">İpucu: klavyede 1-{exercise.options.length} tuşları şık seçer</p>}
    </div>
  );
}
