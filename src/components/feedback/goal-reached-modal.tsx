"use client";

import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConfettiBurst } from "./confetti-burst";

export interface GoalReachedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  goalMinutes: number;
  minutesNow: number;
}

export function GoalReachedModal({
  open,
  onOpenChange,
  goalMinutes,
  minutesNow,
}: GoalReachedModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden">
        <ConfettiBurst count={10} />
        <DialogHeader className="items-center text-center">
          <div className="mb-2 flex size-20 items-center justify-center rounded-full bg-xp/20 motion-safe:animate-in motion-safe:zoom-in-50">
            <Target className="size-10 text-xp" aria-hidden />
          </div>
          <DialogTitle className="text-2xl font-bold">🎯 Günlük hedef tamam!</DialogTitle>
          <DialogDescription className="text-base">
            Bugünlük {goalMinutes} dakikalık hedefi tamamladın. Devam edersen streak
            uzar.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-border bg-card p-4 text-center text-sm">
          <p className="text-muted-foreground">Bugün</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-xp">
            {minutesNow} / {goalMinutes} dk ✓
          </p>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="w-full" size="lg">
            Süper! 🎉
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
