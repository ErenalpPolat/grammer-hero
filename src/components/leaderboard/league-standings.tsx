import { ChevronDown, ChevronUp, Minus } from "lucide-react";
import {
  LEAGUE_DEMOTE_COUNT,
  LEAGUE_MAX_TIER,
  LEAGUE_PROMOTE_COUNT,
} from "@/data/leagues";
import type { LeagueStanding } from "@/lib/league";
import { cn } from "@/lib/utils";

export interface LeagueStandingsProps {
  standings: LeagueStanding[];
  tierIndex: number;
}

export function LeagueStandings({ standings, tierIndex }: LeagueStandingsProps) {
  if (standings.length === 0) {
    return (
      <div className="mt-3 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        Bu hafta için henüz bir lig grubunda değilsin. İlk dersi bitir — gruba
        atanacaksın.
      </div>
    );
  }

  const total = standings.length;
  const canPromote = tierIndex < LEAGUE_MAX_TIER;
  const canDemote = tierIndex > 0;

  return (
    <ul
      className="mt-3 divide-y divide-border rounded-xl border border-border bg-card"
      aria-label={`Lig grubu sıralaması, ${total} oyuncu`}
    >
      {standings.map((s) => {
        const inPromoteZone =
          canPromote && s.rank <= LEAGUE_PROMOTE_COUNT && s.weeklyXp > 0;
        const inDemoteZone =
          canDemote && s.rank > total - LEAGUE_DEMOTE_COUNT;
        const medal =
          s.rank === 1
            ? "🥇"
            : s.rank === 2
              ? "🥈"
              : s.rank === 3
                ? "🥉"
                : null;
        const initial = s.name.charAt(0).toUpperCase();
        const ZoneIcon = inPromoteZone
          ? ChevronUp
          : inDemoteZone
            ? ChevronDown
            : Minus;
        const zoneLabel = inPromoteZone
          ? "Yükselme bölgesi"
          : inDemoteZone
            ? "Düşme bölgesi"
            : "Bölgede değil";

        return (
          <li
            key={s.userId}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm",
              s.isSelf &&
                "sticky bottom-0 z-10 border-y-2 border-primary/40 bg-primary/15 font-semibold backdrop-blur-md",
              inPromoteZone && !s.isSelf && "bg-correct/5",
              inDemoteZone && !s.isSelf && "bg-incorrect/5",
            )}
            aria-label={`${s.rank}. ${s.name}${s.isSelf ? " (sen)" : ""}, ${s.weeklyXp} XP, ${zoneLabel}`}
          >
            <span className="flex w-10 shrink-0 items-center gap-1 tabular-nums">
              {medal ? (
                <span className="text-base leading-none">{medal}</span>
              ) : (
                <span className="text-muted-foreground">{s.rank}.</span>
              )}
            </span>
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                s.isSelf
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground",
              )}
              aria-hidden
            >
              {initial}
            </span>
            <span className="min-w-0 flex-1 truncate">
              {s.name}
              {s.isSelf && <span className="ml-1.5 text-xs text-primary">★ sen</span>}
            </span>
            <ZoneIcon
              className={cn(
                "size-4",
                inPromoteZone && "text-correct",
                inDemoteZone && "text-incorrect",
                !inPromoteZone && !inDemoteZone && "text-muted-foreground/40",
              )}
              aria-hidden
            />
            <span className="w-16 text-right tabular-nums">
              {s.weeklyXp.toLocaleString("tr")}
              <span className="ml-0.5 text-xs text-muted-foreground">XP</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
