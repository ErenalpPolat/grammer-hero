"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChoiceCardProps {
  value: string;
  label: string;
  description?: string;
  /** Big leading icon / emoji / flag */
  leading?: React.ReactNode;
  selected: boolean;
  onSelect: (value: string) => void;
  /** "grid" → stacked icon + label; "row" → horizontal */
  layout?: "grid" | "row";
  disabled?: boolean;
}

export function ChoiceCard({
  value,
  label,
  description,
  leading,
  selected,
  onSelect,
  layout = "grid",
  disabled,
}: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "relative rounded-xl border-2 bg-card p-4 text-left transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        !disabled && !selected && "hover:-translate-y-0.5 hover:border-primary/60",
        selected ? "border-primary bg-primary/5" : "border-border",
        layout === "grid" && "flex flex-col items-center text-center",
        layout === "row" && "flex items-center gap-4",
      )}
    >
      {selected && (
        <span
          aria-hidden
          className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <Check className="size-4" strokeWidth={3} />
        </span>
      )}
      {leading && (
        <span
          className={cn(
            layout === "grid" ? "mb-3 text-4xl" : "shrink-0 text-3xl",
          )}
          aria-hidden
        >
          {leading}
        </span>
      )}
      <span className="flex-1">
        <span className="block font-semibold">{label}</span>
        {description && (
          <span className="mt-1 block text-xs text-muted-foreground">
            {description}
          </span>
        )}
      </span>
    </button>
  );
}
