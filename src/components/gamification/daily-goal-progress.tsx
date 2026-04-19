import { Target, Check } from "lucide-react";
import { CircularProgress } from "./circular-progress";
import { cn } from "@/lib/utils";

export interface DailyGoalProgressProps {
  minutes: number;
  goal: number;
  size?: number;
  strokeWidth?: number;
  /** Show "N/M dk" label next to the ring */
  showLabel?: boolean;
  className?: string;
}

export function DailyGoalProgress({
  minutes,
  goal,
  size = 32,
  strokeWidth = 10,
  showLabel = true,
  className,
}: DailyGoalProgressProps) {
  const pct = goal > 0 ? Math.min(100, (minutes / goal) * 100) : 0;
  const complete = pct >= 100;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill bg-muted px-2 py-1 text-sm font-semibold tabular-nums",
        className,
      )}
    >
      <CircularProgress
        value={pct}
        size={size}
        strokeWidth={strokeWidth}
        progressClassName={complete ? "stroke-xp" : "stroke-primary"}
        label={`Günlük hedef ${minutes} / ${goal} dakika`}
      >
        {complete ? (
          <Check aria-hidden className="size-3 text-xp" />
        ) : (
          <Target aria-hidden className="size-3 text-foreground" />
        )}
      </CircularProgress>
      {showLabel && (
        <span className="text-xs">
          {minutes}/{goal} dk
        </span>
      )}
    </span>
  );
}
