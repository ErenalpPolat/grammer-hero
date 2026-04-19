"use client";

import { Flame, HeartCrack } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface StreakBrokenModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previousStreak: number;
}

export function StreakBrokenModal({
  open,
  onOpenChange,
  previousStreak,
}: StreakBrokenModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="items-center text-center">
          <div className="relative mb-2 flex size-20 items-center justify-center rounded-full bg-muted">
            <Flame
              className="size-10 text-muted-foreground/40"
              aria-hidden
            />
            <HeartCrack
              className="absolute -bottom-1 -right-1 size-8 text-incorrect"
              aria-hidden
            />
          </div>
          <DialogTitle className="text-2xl font-bold">💔 Streak&apos;in koptu</DialogTitle>
          <DialogDescription className="text-base">
            <span className="text-foreground">{previousStreak} gün</span>lük streak&apos;ini
            kaybettin — ama her şey bitti değil. Bugün ders yaparak yeniden başlattın.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-border bg-card p-4 text-center text-sm">
          <p className="text-muted-foreground">Yeni streak</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-2xl font-bold tabular-nums">
            <Flame className="size-5 text-streak" /> 1 gün
          </p>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="w-full" size="lg">
            Tamam, kaldığımız yerden 💪
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
