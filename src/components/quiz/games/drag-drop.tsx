"use client";

import { useState } from "react";
import type { DragDropExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface DragDropProps {
  exercise: DragDropExercise;
  answer: number | null;
  onAnswerChange: (idx: number) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

export function DragDrop({
  exercise,
  answer,
  onAnswerChange,
  locked,
  feedback,
}: DragDropProps) {
  const [dragOver, setDragOver] = useState(false);

  const droppedOption = answer != null ? exercise.options[answer] : null;
  const isCorrectAnswer = feedback != null && answer === exercise.answerIndex;
  const isWrongPick = feedback != null && answer != null && !feedback.correct;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (locked) return;
    const idx = Number.parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (Number.isFinite(idx)) onAnswerChange(idx);
  };

  const [before, after] = exercise.sentence.split("___");

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:px-6">
      <p className="text-sm text-muted-foreground">
        Doğru kelimeyi boşluğa sürükle (veya tıkla):
      </p>

      <div className="rounded-lg border-2 border-border bg-card p-6 text-center">
        <p className="text-xl font-medium leading-relaxed sm:text-2xl">
          {before}
          <span
            onDragOver={(e) => {
              e.preventDefault();
              if (!locked) setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={cn(
              "mx-1 inline-flex min-w-[7rem] items-center justify-center rounded-md border-b-4 px-3 py-1 align-baseline font-bold transition-all",
              dragOver && !droppedOption && "border-primary bg-primary/20 ring-2 ring-primary",
              !droppedOption && "border-dashed border-primary bg-muted text-muted-foreground",
              droppedOption && !feedback && "border-primary bg-primary/10 text-primary",
              isCorrectAnswer && "border-correct bg-correct/10 text-correct",
              isWrongPick && "border-incorrect bg-incorrect/10 text-incorrect",
            )}
            aria-label="Bırak alanı"
          >
            {droppedOption ?? "___"}
          </span>
          {after}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {exercise.options.map((opt, i) => {
          const used = answer === i;
          return (
            <button
              key={i}
              type="button"
              draggable={!locked && !used}
              onDragStart={(e) => {
                if (locked) return;
                e.dataTransfer.setData("text/plain", String(i));
                e.dataTransfer.effectAllowed = "move";
              }}
              onClick={() => !locked && !used && onAnswerChange(i)}
              disabled={locked || used}
              className={cn(
                "rounded-lg border-2 border-border bg-card px-5 py-3 text-base font-semibold shadow-button transition-all",
                "[--button-shadow:var(--neutral-300)] dark:[--button-shadow:var(--neutral-700)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                used
                  ? "opacity-20"
                  : !locked && "cursor-grab hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-button-pressed active:cursor-grabbing",
              )}
              aria-hidden={used}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        💡 Mobilde tıklayarak da ekleyebilirsin · Bırak alanına tıklayarak çıkarırsın
      </p>
    </div>
  );
}
