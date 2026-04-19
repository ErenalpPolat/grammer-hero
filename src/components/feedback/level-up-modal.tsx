"use client";

import { Trophy } from "lucide-react";
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

export interface LevelUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fromLevel: number;
  toLevel: number;
}

export function LevelUpModal({ open, onOpenChange, fromLevel, toLevel }: LevelUpModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden">
        <ConfettiBurst count={16} />
        <DialogHeader className="items-center text-center">
          <div className="mb-2 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-xp/30 to-violet-500/20 motion-safe:animate-in motion-safe:zoom-in-50">
            <Trophy className="size-10 text-xp" aria-hidden />
          </div>
          <DialogTitle className="text-3xl font-bold">⭐ LEVEL UP! ⭐</DialogTitle>
          <DialogDescription className="text-base">
            Tebrikler! Yeni bir seviyeye ulaştın.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-4 py-4 text-center">
          <span className="text-3xl font-bold text-muted-foreground tabular-nums">
            Lv.{fromLevel}
          </span>
          <span className="text-2xl text-muted-foreground" aria-hidden>
            →
          </span>
          <span className="rounded-pill bg-xp/15 px-4 py-2 text-3xl font-bold text-xp tabular-nums motion-safe:animate-in motion-safe:zoom-in-75">
            Lv.{toLevel}
          </span>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="w-full" size="lg">
            Harika! 🎉
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
