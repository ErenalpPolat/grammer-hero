import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GemCounterProps {
  count: number;
  className?: string;
}

function formatCount(n: number): string {
  if (n < 1_000) return String(n);
  if (n < 10_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${Math.round(n / 1_000)}k`;
}

export function GemCounter({ count, className }: GemCounterProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill bg-muted px-2.5 py-1 text-sm font-semibold tabular-nums",
        className,
      )}
      aria-label={`${count} gem`}
    >
      <Gem aria-hidden className="size-4 text-gem" />
      {formatCount(count)}
    </span>
  );
}
