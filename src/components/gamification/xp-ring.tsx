import { CircularProgress } from "./circular-progress";
import { cn } from "@/lib/utils";

export interface XPRingProps {
  /** XP earned within the current level (0..xpToNext) */
  currentXp: number;
  /** XP needed to reach next level */
  xpToNext: number;
  level: number;
  size?: number;
  strokeWidth?: number;
  /** Show "Lv.N" text in center */
  showLabel?: boolean;
  /** Compact: no text, used inside lesson cards */
  compact?: boolean;
  className?: string;
}

export function XPRing({
  currentXp,
  xpToNext,
  level,
  size = 56,
  strokeWidth = 8,
  showLabel = true,
  compact = false,
  className,
}: XPRingProps) {
  const pct = xpToNext > 0 ? Math.min(100, (currentXp / xpToNext) * 100) : 0;
  const complete = pct >= 100;

  return (
    <CircularProgress
      value={pct}
      size={size}
      strokeWidth={strokeWidth}
      progressClassName={complete ? "stroke-xp" : "stroke-primary"}
      label={`Seviye ${level} · ${Math.round(pct)}% · ${currentXp} / ${xpToNext} XP`}
      className={className}
    >
      {!compact && showLabel && (
        <span className={cn("text-xs font-bold tabular-nums", complete ? "text-xp" : "text-foreground")}>
          Lv.{level}
        </span>
      )}
    </CircularProgress>
  );
}
