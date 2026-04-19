"use client";

import { Button } from "@/components/ui/button";

export interface QuizFooterProps {
  canSubmit: boolean;
  onSubmit: () => void;
  onSkip: () => void;
}

export function QuizFooter({ canSubmit, onSubmit, onSkip }: QuizFooterProps) {
  return (
    <div className="sticky bottom-0 border-t border-border bg-background px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <Button variant="ghost" onClick={onSkip}>
          Atla
        </Button>
        <Button onClick={onSubmit} disabled={!canSubmit} size="lg">
          Kontrol Et
        </Button>
      </div>
    </div>
  );
}
