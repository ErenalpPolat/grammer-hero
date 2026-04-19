import type { LucideIcon } from "lucide-react";
import { Flame, Gem, CheckCircle2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProfileStatsProps {
  streak: number;
  longestStreak: number;
  gems: number;
  lessonsCompleted: number;
  badgesEarned: number;
  badgesTotal: number;
}

export function ProfileStats({
  streak,
  longestStreak,
  gems,
  lessonsCompleted,
  badgesEarned,
  badgesTotal,
}: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Stat
        icon={Flame}
        iconClass="text-streak"
        value={streak}
        label="Streak"
        sub={`En iyi ${longestStreak}`}
      />
      <Stat icon={Gem} iconClass="text-gem" value={gems.toLocaleString("tr")} label="Gem" />
      <Stat
        icon={CheckCircle2}
        iconClass="text-correct"
        value={lessonsCompleted}
        label="Ders ✓"
      />
      <Stat
        icon={Trophy}
        iconClass="text-xp"
        value={`${badgesEarned}/${badgesTotal}`}
        label="Rozet"
      />
    </div>
  );
}

function Stat({
  icon: Icon,
  iconClass,
  value,
  label,
  sub,
}: {
  icon: LucideIcon;
  iconClass: string;
  value: string | number;
  label: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
      <Icon className={cn("mx-auto mb-1.5 size-5", iconClass)} aria-hidden />
      <p className="text-2xl font-bold tabular-nums">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
      {sub && <p className="mt-0.5 text-[10px] text-muted-foreground">{sub}</p>}
    </div>
  );
}
