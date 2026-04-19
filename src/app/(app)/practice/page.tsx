import Link from "next/link";
import { ArrowRight, Dumbbell, Target } from "lucide-react";
import { availableGameTypes } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GAME_TYPE_LABELS } from "@/lib/exercise/types";
import { MOCK_UNITS } from "@/lib/learn/mock-data";
import { requireSessionUser } from "@/lib/session";

export const metadata = { title: "Pratik" };

export default async function PracticePage() {
  await requireSessionUser();

  const availableLessons = MOCK_UNITS.flatMap((u) =>
    u.lessons
      .filter((l) => availableGameTypes(l.id).length > 0)
      .map((l) => ({ ...l, unitTitle: u.title })),
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      <header>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <Dumbbell className="size-7 text-primary" /> Pratik
        </h1>
        <p className="mt-1 text-muted-foreground">
          Tamamladığın konulardan rastgele soru çek. Hearts harcanmaz — serbest oyna.
        </p>
      </header>

      {availableLessons.length === 0 ? (
        <EmptyState />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="size-5 text-primary" /> Soru bankası hazır dersler
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableLessons.map((l) => (
              <div
                key={l.id}
                className="flex flex-wrap items-center gap-3 rounded-lg border border-border p-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {l.unitTitle}
                  </p>
                  <p className="font-semibold">{l.title}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableGameTypes(l.id).map((gt) => (
                    <Button asChild key={gt} variant="outline" size="sm">
                      <Link href={`/lesson/${l.id}/quiz/${gt}`}>
                        {GAME_TYPE_LABELS[gt]}
                        <ArrowRight />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <p className="text-center text-xs text-muted-foreground">
        Faz 9&apos;da: konu karışık seti, zorluk seçimi, otomatik oyun tipi rotasyonu.
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-border p-10 text-center">
      <p className="text-lg font-semibold">Henüz pratik yapacak ders yok</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Önce skill tree&apos;den bir ders aç.
      </p>
      <Button asChild className="mt-4">
        <Link href="/learn">Skill tree&apos;ye git</Link>
      </Button>
    </div>
  );
}
