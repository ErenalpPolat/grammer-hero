import { Lock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Badge {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
}

export function BadgeGrid({ badges }: { badges: Badge[] }) {
  return (
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {badges.map((b) => (
        <li key={b.id}>
          <BadgeCard badge={b} />
        </li>
      ))}
    </ul>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  const Icon = badge.earned ? badge.icon : Lock;
  return (
    <div
      className={cn(
        "flex aspect-square flex-col items-center justify-center rounded-xl border-2 p-2 text-center transition-transform",
        badge.earned
          ? "border-xp/50 bg-xp/10 hover:-translate-y-0.5"
          : "border-dashed border-border bg-muted/30 opacity-60",
      )}
      title={`${badge.label} — ${badge.description}`}
    >
      <Icon
        className={cn(
          "mb-1 size-7",
          badge.earned ? "text-xp" : "text-muted-foreground",
        )}
        aria-hidden
      />
      <p className="text-[11px] font-semibold leading-tight">{badge.label}</p>
    </div>
  );
}
