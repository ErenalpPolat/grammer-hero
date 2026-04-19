"use client";

import { useEffect } from "react";
import { Check, X } from "lucide-react";
import type { TrueFalseExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface TrueFalseProps {
  exercise: TrueFalseExercise;
  answer: boolean | null;
  onAnswerChange: (val: boolean) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

export function TrueFalse({ exercise, answer, onAnswerChange, locked, feedback }: TrueFalseProps) {
  // Keyboard ← → for True/False
  useEffect(() => {
    if (locked) return;
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowLeft") onAnswerChange(true);
      else if (e.key === "ArrowRight") onAnswerChange(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [locked, onAnswerChange]);

  const trueIsSelected = answer === true;
  const falseIsSelected = answer === false;
  const trueIsCorrect = feedback != null && exercise.isCorrect === true;
  const falseIsCorrect = feedback != null && exercise.isCorrect === false;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:px-6">
      <p className="text-sm text-muted-foreground">Bu cümle gramer olarak doğru mu?</p>
      <div className="rounded-lg border-2 border-border bg-card p-6 text-center">
        <p className="text-xl font-semibold sm:text-2xl">&quot;{exercise.sentence}&quot;</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <BigButton
          label="Doğru"
          icon={<Check className="size-6" strokeWidth={3} />}
          color="success"
          selected={trueIsSelected}
          isCorrectAnswer={trueIsCorrect}
          feedbackState={feedback}
          locked={locked}
          onClick={() => onAnswerChange(true)}
          kbd="←"
        />
        <BigButton
          label="Yanlış"
          icon={<X className="size-6" strokeWidth={3} />}
          color="destructive"
          selected={falseIsSelected}
          isCorrectAnswer={falseIsCorrect}
          feedbackState={feedback}
          locked={locked}
          onClick={() => onAnswerChange(false)}
          kbd="→"
        />
      </div>
    </div>
  );
}

function BigButton({
  label,
  icon,
  color,
  selected,
  isCorrectAnswer,
  feedbackState,
  locked,
  onClick,
  kbd,
}: {
  label: string;
  icon: React.ReactNode;
  color: "success" | "destructive";
  selected: boolean;
  isCorrectAnswer: boolean;
  feedbackState: { correct: boolean } | null;
  locked: boolean;
  onClick: () => void;
  kbd: string;
}) {
  const isWrongPick = feedbackState && selected && !feedbackState.correct;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      aria-pressed={selected}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-6 font-bold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        !locked && "hover:-translate-y-0.5",
        selected && !feedbackState && color === "success" && "border-correct bg-correct/10 text-correct",
        selected && !feedbackState && color === "destructive" && "border-incorrect bg-incorrect/10 text-incorrect",
        !selected && !feedbackState && "border-border bg-card",
        isCorrectAnswer && "border-correct bg-correct/10 text-correct",
        isWrongPick && "border-incorrect bg-incorrect/10 text-incorrect",
      )}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-full text-white",
          color === "success" ? "bg-correct" : "bg-incorrect",
        )}
        aria-hidden
      >
        {icon}
      </span>
      <span className="text-lg">{label}</span>
      <span className="font-mono text-xs text-muted-foreground" aria-hidden>
        {kbd}
      </span>
    </button>
  );
}
