"use client";

import { useEffect } from "react";
import type { FillInBlankExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface FillInBlankProps {
  exercise: FillInBlankExercise;
  answer: number | null;
  onAnswerChange: (idx: number) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

export function FillInBlank({ exercise, answer, onAnswerChange, locked, feedback }: FillInBlankProps) {
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

  const renderedSentence = renderBlank(exercise.sentence, answer != null ? exercise.options[answer] : null, feedback, exercise.answerIndex === answer);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
      <p className="text-sm text-muted-foreground">Boşluğa uygun kelimeyi seç:</p>
      <p className="text-center text-2xl font-semibold leading-relaxed sm:text-3xl">
        {renderedSentence}
      </p>
      {exercise.hint && !locked && (
        <p className="text-center text-sm text-muted-foreground">💡 {exercise.hint}</p>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                "rounded-lg border-2 px-3 py-3 text-center text-base font-semibold transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                !locked && "hover:-translate-y-0.5 hover:border-primary",
                selected && !feedback && "border-primary bg-primary/10",
                !selected && !feedback && "border-border bg-card",
                isCorrectAnswer && "border-correct bg-correct/10 text-correct",
                isWrongPick && "border-incorrect bg-incorrect/10 text-incorrect",
              )}
            >
              <span className="mr-2 font-mono text-xs text-muted-foreground" aria-hidden>
                {i + 1}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function renderBlank(
  sentence: string,
  filled: string | null,
  feedback: { correct: boolean } | null,
  userChoiceIsCorrect: boolean,
) {
  const [before, after] = sentence.split("___");
  return (
    <>
      {before}
      <span
        className={cn(
          "mx-1 inline-block min-w-[6rem] rounded-md border-b-4 px-3 py-1 align-baseline font-bold",
          !filled && "border-primary bg-muted text-muted-foreground",
          filled && !feedback && "border-primary bg-primary/10 text-primary",
          filled && feedback?.correct && userChoiceIsCorrect && "border-correct bg-correct/10 text-correct",
          filled && feedback && !userChoiceIsCorrect && "border-incorrect bg-incorrect/10 text-incorrect",
        )}
      >
        {filled ?? "___"}
      </span>
      {after}
    </>
  );
}
