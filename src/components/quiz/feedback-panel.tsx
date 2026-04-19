"use client";

import { Check, X, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FeedbackPanelProps {
  /** Null = hidden, otherwise show feedback with state */
  result:
    | null
    | {
        correct: boolean;
        correctAnswerLabel: string;
        explanation?: string;
        wasSkipped?: boolean;
      };
  onContinue: () => void;
}

export function FeedbackPanel({ result, onContinue }: FeedbackPanelProps) {
  if (!result) return null;

  const { correct, correctAnswerLabel, explanation, wasSkipped } = result;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "sticky bottom-0 z-20 border-t-2 px-4 py-4 sm:px-6",
        "motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-200",
        correct
          ? "border-correct/50 bg-correct/10"
          : "border-incorrect/50 bg-incorrect/10",
      )}
    >
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm",
              correct ? "bg-correct" : wasSkipped ? "bg-muted-foreground" : "bg-incorrect",
            )}
            aria-hidden
          >
            {correct ? (
              <Check className="size-5" strokeWidth={3} />
            ) : wasSkipped ? (
              <SkipForward className="size-5" />
            ) : (
              <X className="size-5" strokeWidth={3} />
            )}
          </span>
          <div className="min-w-0">
            <p
              className={cn(
                "text-lg font-bold",
                correct ? "text-correct" : "text-incorrect",
              )}
            >
              {correct ? "Mükemmel!" : wasSkipped ? "Geçildi" : "Yanlış cevap"}
            </p>
            {!correct && correctAnswerLabel && (
              <p className="text-sm">
                <span className="text-muted-foreground">Doğru cevap:</span>{" "}
                <span className="font-semibold">{correctAnswerLabel}</span>
              </p>
            )}
            {explanation && (
              <p className="mt-1 text-sm text-muted-foreground">{explanation}</p>
            )}
          </div>
        </div>
        <Button onClick={onContinue} variant={correct ? "success" : "primary"} size="lg">
          Devam →
        </Button>
      </div>
    </div>
  );
}
