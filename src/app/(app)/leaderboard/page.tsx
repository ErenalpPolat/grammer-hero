import { Medal, Trophy } from "lucide-react";
import { LeaderboardRow } from "@/components/leaderboard/leaderboard-row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLeaderboard, type LeaderboardEntry } from "@/lib/leaderboard";
import { requireSessionUser } from "@/lib/session";

export const metadata = { title: "Liderlik" };

export default async function LeaderboardPage() {
  const user = await requireSessionUser();
  const [weekly, monthly, allTime] = await Promise.all([
    getLeaderboard({ window: "week", selfUserId: user.id, limit: 20 }),
    getLeaderboard({ window: "month", selfUserId: user.id, limit: 20 }),
    getLeaderboard({ window: "all", selfUserId: user.id, limit: 20 }),
  ]);

  // Lig kart için all-time rank kullanılır (kullanıcının "main" sıralaması)
  const allTimeSelfRank = allTime.find((e) => e.isSelf)?.rank;
  const weeklySelfRank = weekly.find((e) => e.isSelf)?.rank;

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      <header>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <Trophy className="size-7 text-xp" /> Liderlik
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          XP&apos;ye göre sıralama. Her oyun bitirdiğinde sıralamada yükselirsin.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-accent text-xl">
            🥈
          </span>
          <div>
            <p className="font-semibold">Gümüş Lig</p>
            <p className="text-xs text-muted-foreground">
              {weeklySelfRank
                ? `Bu hafta ${weeklySelfRank}. sırada · liglerde 5 gün kaldı`
                : "Bu hafta sıralamada değilsin — bir ders bitir"}
            </p>
          </div>
        </div>
        <div className="text-right text-sm">
          <p className="text-muted-foreground">Tüm zamanlar</p>
          <p className="flex items-center justify-end gap-1 font-semibold">
            <Medal className="size-4 text-primary" />
            {allTimeSelfRank ? `${allTimeSelfRank}. sırada` : "Henüz XP yok"}
          </p>
        </div>
      </div>

      <Tabs defaultValue="week">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">Hafta</TabsTrigger>
          <TabsTrigger value="month">Ay</TabsTrigger>
          <TabsTrigger value="all">Tüm Zamanlar</TabsTrigger>
        </TabsList>
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
