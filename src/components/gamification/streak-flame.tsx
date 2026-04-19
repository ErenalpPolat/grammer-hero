import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StreakFlameProps {
  count: number;
  /** Subtle pulse for streaks ≥ 7 days ("sıcak" state) */
  pulse?: boolean;
  className?: string;
}

export function StreakFlame({ count, pulse, className }: StreakFlameProps) {
  const active = count > 0;
  const shouldPulse = pulse ?? count >= 7;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill bg-muted px-2.5 py-1 text-sm font-semibold tabular-nums",
        shouldPulse && active && "motion-safe:animate-pulse",
        className,
      )}
      aria-label={`${count} gün streak`}
    >
      <Flame
        aria-hidden
        className={cn(
          "size-4",
          active ? "fill-streak/30 text-streak" : "text-muted-foreground/50",
        )}
      />
      {count}
    </span>
  );
}
