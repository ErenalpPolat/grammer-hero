import { cn } from "@/lib/utils";

export function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8 flex flex-col items-center gap-3">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "size-2.5 rounded-full transition-colors",
              i < current ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </div>
      <p className="text-sm font-semibold text-muted-foreground">
        Adım {current} / {total}
      </p>
    </div>
  );
}
