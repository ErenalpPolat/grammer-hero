import { Medal, Trophy } from "lucide-react";
import { LeaderboardRow } from "@/components/leaderboard/leaderboard-row";
import { LeagueCard } from "@/components/leaderboard/league-card";
import { LeagueStandings } from "@/components/leaderboard/league-standings";
import { LeagueResultModal } from "@/components/feedback/league-result-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLeaderboard, type LeaderboardEntry } from "@/lib/leaderboard";
import { getPendingLeagueResult, getUserLeagueStatus } from "@/lib/league";
import { requireSessionUser } from "@/lib/session";

export const metadata = { title: "Liderlik" };

export default async function LeaderboardPage() {
  const user = await requireSessionUser();
  const [weekly, monthly, allTime, league, pendingResult] = await Promise.all([
    getLeaderboard({ window: "week", selfUserId: user.id, limit: 20 }),
    getLeaderboard({ window: "month", selfUserId: user.id, limit: 20 }),
    getLeaderboard({ window: "all", selfUserId: user.id, limit: 20 }),
    getUserLeagueStatus(user.id),
    getPendingLeagueResult(user.id),
  ]);

  const allTimeSelfRank = allTime.find((e) => e.isSelf)?.rank;

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      <header>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <Trophy className="size-7 text-xp" /> Liderlik
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Haftalık lig + küresel XP sıralaması. Her oyun bitirdiğinde ilerlersin.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <LeagueCard
          tier={league.tier}
          selfRank={league.selfRank}
          daysRemaining={league.daysRemaining}
          inGroup={league.inGroup}
        />
        <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground">
          <Medal className="size-4 text-primary" aria-hidden />
          Tüm zamanlar:{" "}
          <span className="font-semibold text-foreground">
            {allTimeSelfRank ? `${allTimeSelfRank}. sırada` : "Henüz XP yok"}
          </span>
        </div>
      </div>

      <Tabs defaultValue="league">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="league">Lig</TabsTrigger>
          <TabsTrigger value="week">Hafta</TabsTrigger>
          <TabsTrigger value="month">Ay</TabsTrigger>
          <TabsTrigger value="all">Tüm Zamanlar</TabsTrigger>
        </TabsList>
        <TabsContent value="league">
          <LeagueStandings
            standings={league.standings}
            tierIndex={league.tier.index}
          />
        </TabsContent>
        <TabsContent value="week">
          <LeaderboardList entries={weekly} window="week" />
        </TabsContent>
        <TabsContent value="month">
          <LeaderboardList entries={monthly} window="month" />
        </TabsContent>
        <TabsContent value="all">
          <LeaderboardList entries={allTime} window="all" />
        </TabsContent>
      </Tabs>

      {pendingResult && <LeagueResultModal result={pendingResult} />}
    </div>
  );
}

function LeaderboardList({
  entries,
  window,
}: {
  entries: LeaderboardEntry[];
  window: "week" | "month" | "all";
}) {
  if (entries.length === 0) {
    const msg =
      window === "week"
        ? "Bu hafta henüz hiç quiz tamamlanmadı. İlk dersi sen bitir!"
        : window === "month"
          ? "Bu ay henüz aktivite yok. İlk dersi sen bitir!"
          : "Henüz hiç oyuncu yok. İlk dersini yap, sıralamayı sen başlat!";
    return (
      <div className="mt-3 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        {msg}
      </div>
    );
  }
  return (
    <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-card">
      {entries.map((e) => (
        <LeaderboardRow key={`${window}-${e.id}`} entry={e} />
      ))}
    </ul>
  );
}
