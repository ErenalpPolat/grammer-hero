import Link from "next/link";
import { BookOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Unit } from "@/lib/learn/types";
import { cn } from "@/lib/utils";

export interface UnitBannerProps {
  unit: Unit;
  /** Layout variant — "tree" used above skill tree, "detail" used on unit page */
  variant?: "tree" | "detail";
}

const DIFFICULTY_COLOR: Record<Unit["difficulty"], string> = {
  "Başlangıç": "bg-correct/15 text-correct",
  "Orta": "bg-xp/20 text-xp",
  "İleri": "bg-incorrect/15 text-incorrect",
};

export function UnitBanner({ unit, variant = "tree" }: UnitBannerProps) {
  const completed = unit.lessons.filter((l) => l.status === "completed").length;
  const total = unit.lessons.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const locked = unit.status === "locked";

  return (
    <div
      className={cn(
        "rounded-xl border p-5",
        locked
          ? "border-dashed border-border bg-muted/30"
          : "border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background",
      )}
      aria-disabled={locked || undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              ÜNİTE {indexFromSlug(unit.slug)}
            </p>
            <span
              className={cn(
                "rounded-pill px-2 py-0.5 text-xs font-semibold",
                DIFFICULTY_COLOR[unit.difficulty],
              )}
            >
              {unit.difficulty}
            </span>
          </div>
          <h2
            className={cn(
              "mt-1 text-2xl font-bold",
              locked && "text-muted-foreground",
            )}
          >
            {unit.title}
            {locked && <Lock className="ml-2 inline size-5 align-baseline" aria-hidden />}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{unit.description}</p>
        </div>
        <span className="shrink-0 text-right tabular-nums">
          <span className="text-2xl font-bold">{completed}</span>
          <span className="text-muted-foreground">/{total}</span>
          <p className="text-xs text-muted-foreground">tamamlandı</p>
        </span>
      </div>

      {!locked && (
        <>
          <div
            className="mt-4 h-2 overflow-hidden rounded-pill bg-border"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Ünite ilerleme ${pct}%`}
          >
            <div
              className="h-full rounded-pill bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>

          {variant === "tree" && (
            <div className="mt-4 flex justify-end">
              <Button asChild variant="outline" size="sm">
                <Link href={`/learn/${unit.slug}`}>
                  <BookOpen /> Ünite Rehberi
                </Link>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Mock helper — in real app, unit order comes from DB
function indexFromSlug(slug: string): number {
  const order = ["present-simple", "past-simple"];
  return order.indexOf(slug) + 1 || 1;
}
