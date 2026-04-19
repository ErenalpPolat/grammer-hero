"use client";

import { ArrowDownCircle, ArrowUpCircle, Minus, Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTier } from "@/data/leagues";
import { markLeagueResultNotifiedAction } from "@/lib/league-actions";
import type { PendingLeagueResult } from "@/lib/league";
import { cn } from "@/lib/utils";
import { ConfettiBurst } from "./confetti-burst";

export interface LeagueResultModalProps {
  result: PendingLeagueResult;
}

export function LeagueResultModal({ result }: LeagueResultModalProps) {
  const [open, setOpen] = useState(true);
  const [pending, startTransition] = useTransition();

  const fromTier = getTier(result.fromTier);
  const toTier = getTier(result.toTier);

  const dismiss = () => {
    startTransition(async () => {
      await markLeagueResultNotifiedAction(result.membershipId);
      setOpen(false);
    });
  };

  const title =
    result.outcome === "promoted"
      ? "Yükseldin!"
      : result.outcome === "demoted"
        ? "Bir tur aşağı"
        : "Aynı ligde kalıyorsun";

  const Icon =
    result.outcome === "promoted"
      ? ArrowUpCircle
      : result.outcome === "demoted"
        ? ArrowDownCircle
        : Minus;

  const iconColor =
    result.outcome === "promoted"
      ? "text-correct"
      : result.outcome === "demoted"
        ? "text-incorrect"
        : "text-muted-foreground";

  const description =
    result.outcome === "promoted"
      ? `Geçen hafta ${result.finalRank}. sırada bitirdin ve ${toTier.name}'ne terfi ettin.`
      : result.outcome === "demoted"
        ? `Geçen hafta ${result.finalRank}. sırada bitirdin. ${toTier.name}'ne düştün — bu hafta geri dön!`
        : `Geçen hafta ${result.finalRank}. sırada bitirdin. ${fromTier.name}'nde kalmaya devam ediyorsun.`;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) dismiss();
      }}
    >
      <DialogContent className="overflow-hidden">
        {result.outcome === "promoted" && <ConfettiBurst count={16} />}
        <DialogHeader className="items-center text-center">
          <div
            className={cn(
              "mb-2 flex size-20 items-center justify-center rounded-full bg-muted motion-safe:animate-in motion-safe:zoom-in-50",
            )}
          >
            <Icon className={cn("size-10", iconColor)} aria-hidden />
          </div>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-3 py-4 text-center">
          <span
            className={cn(
              "flex items-center gap-2 rounded-pill px-3 py-2 text-base font-semibold",
              fromTier.accentClass,
            )}
          >
            <span aria-hidden>{fromTier.emoji}</span>
            {fromTier.name}
          </span>
          {result.outcome !== "stayed" && (
            <>
              <span className="text-xl text-muted-foreground" aria-hidden>
                →
              </span>
              <span
                className={cn(
                  "flex items-center gap-2 rounded-pill px-3 py-2 text-base font-semibold motion-safe:animate-in motion-safe:zoom-in-75",
                  toTier.accentClass,
                )}
              >
                <span aria-hidden>{toTier.emoji}</span>
                {toTier.name}
              </span>
            </>
          )}
        </div>

        {result.podiumGems > 0 && (
          <p className="flex items-center justify-center gap-1.5 text-sm text-gem">
            <Sparkles className="size-4" aria-hidden />
            Podyum bonusu: <strong>{result.podiumGems}</strong> gem kazandın
          </p>
        )}

        <DialogFooter>
          <Button
            onClick={dismiss}
            className="w-full"
            size="lg"
            disabled={pending}
          >
            {result.outcome === "promoted" ? "Harika! 🎉" : "Anladım"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
