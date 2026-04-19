"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useState } from "react";
import { HeartsIndicator } from "@/components/gamification/hearts-indicator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface QuizFrameProps {
  /** Progress 0-100 (controlled by useLessonState) */
  progress: number;
  hearts: number;
  heartsMax: number;
  exitHref: string;
  children: React.ReactNode;
}

export function QuizFrame({ progress, hearts, heartsMax, exitHref, children }: QuizFrameProps) {
  const [exitOpen, setExitOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/80 px-3 py-3 backdrop-blur-md sm:px-6">
        <button
          type="button"
          onClick={() => setExitOpen(true)}
          aria-label="Dersten çık"
          className={cn(
            "flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        >
          <X className="size-5" />
        </button>

        <div
          className="flex-1"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`İlerleme ${progress}%`}
        >
          <div className="h-3 w-full overflow-hidden rounded-pill bg-border">
            <div
              className="h-full rounded-pill bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <HeartsIndicator hearts={hearts} max={heartsMax} size="lg" />
      </header>

      <main id="main" className="flex flex-1 flex-col">{children}</main>

      <Dialog open={exitOpen} onOpenChange={setExitOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dersten çıkmak istediğine emin misin?</DialogTitle>
            <DialogDescription>
              Bu dersteki ilerlemen kaydedilmeyecek. Tekrar başlamak zorunda kalacaksın.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => setExitOpen(false)}>
              Geri dön
            </Button>
            <Button variant="destructive" onClick={() => router.push(exitHref)}>
              Evet, çık
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
