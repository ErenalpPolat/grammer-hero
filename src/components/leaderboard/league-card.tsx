import { Clock } from "lucide-react";
import type { LeagueTier } from "@/data/leagues";
import { cn } from "@/lib/utils";

export interface LeagueCardProps {
  tier: LeagueTier;
  selfRank: number | null;
  daysRemaining: number;
  inGroup: boolean;
}

export function LeagueCard({ tier, selfRank, daysRemaining, inGroup }: LeagueCardProps) {
  const dayText =
    daysRemaining === 0
      ? "bugün bitiyor"
      : daysRemaining === 1
        ? "1 gün kaldı"
        : `${daysRemaining} gün kaldı`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={cn(
            "flex size-12 items-center justify-center rounded-full text-2xl",
            tier.accentClass,
          )}
        >
          {tier.emoji}
        </span>
        <div>
          <p className="font-semibold">{tier.name}</p>
          <p className="text-xs text-muted-foreground">
            {inGroup && selfRank
              ? `Bu hafta ${selfRank}. sırada`
              : "Bu hafta henüz sıralamada değilsin — bir ders bitir"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 rounded-pill bg-muted px-3 py-1 text-xs text-muted-foreground">
        <Clock className="size-3.5" aria-hidden />
        <span>{dayText}</span>
      </div>
    </div>
  );
}
