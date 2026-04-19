import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const SIZE_MAP = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
} as const;

export interface HeartsIndicatorProps {
  hearts: number;
  /** Max hearts (default 3) */
  max?: number;
  size?: keyof typeof SIZE_MAP;
  className?: string;
}

export function HeartsIndicator({ hearts, max = 3, size = "md", className }: HeartsIndicatorProps) {
  const clamped = Math.max(0, Math.min(max, Math.round(hearts)));
  const low = clamped > 0 && clamped <= 1;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5",
        low && "motion-safe:animate-pulse",
        className,
      )}
      aria-label={`${clamped} can`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Heart
          key={i}
          aria-hidden
          className={cn(
            SIZE_MAP[size],
            i < clamped ? "fill-hearts text-hearts" : "text-muted-foreground/40",
          )}
        />
      ))}
    </span>
  );
}
