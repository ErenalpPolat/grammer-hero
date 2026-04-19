import { Flame } from "lucide-react";
import type { LeaderboardEntry } from "@/lib/leaderboard";
import { cn } from "@/lib/utils";

export function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const { rank, name, xp, streak, isSelf } = entry;
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null;
  const initial = name.charAt(0).toUpperCase();

  return (
    <li
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm",
        isSelf &&
          "sticky bottom-0 z-10 border-y-2 border-primary/40 bg-primary/15 font-semibold backdrop-blur-md",
      )}
      aria-label={`${rank}. ${name}${isSelf ? " (sen)" : ""}, ${xp} XP, ${streak} gün streak`}
    >
      <span className="flex w-10 shrink-0 items-center gap-1 tabular-nums">
        {medal && <span className="text-base leading-none">{medal}</span>}
        {!medal && <span className="text-muted-foreground">{rank}.</span>}
      </span>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
          isSelf ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
        )}
        aria-hidden
      >
        {initial}
      </span>
      <span className="min-w-0 flex-1 truncate">
        {name}
        {isSelf && <span className="ml-1.5 text-xs text-primary">★ sen</span>}
      </span>
      <span className="flex items-center gap-1 text-muted-foreground">
        <Flame className="size-3.5 text-streak" aria-hidden />
        <span className="tabular-nums">{streak}</span>
      </span>
      <span className="w-16 text-right tabular-nums">
        {xp.toLocaleString("tr")}
        <span className="ml-0.5 text-xs text-muted-foreground">XP</span>
      </span>
    </li>
  );
}
