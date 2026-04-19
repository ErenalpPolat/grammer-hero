"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ArrowLeft, Brain, RotateCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { rateCardAction } from "@/lib/review";
import type { ReviewQuality } from "@/lib/sm2";
import { cn } from "@/lib/utils";

const RATINGS: Array<{
  value: ReviewQuality;
  emoji: string;
  label: string;
  className: string;
}> = [
  { value: "again", emoji: "😩", label: "Tekrar", className: "bg-incorrect/10 text-incorrect" },
  { value: "hard", emoji: "😐", label: "Zor", className: "bg-streak/10 text-streak" },
  { value: "easy", emoji: "🙂", label: "Kolay", className: "bg-primary/10 text-primary" },
  { value: "perfect", emoji: "😎", label: "Mükemmel", className: "bg-correct/10 text-correct" },
];

export interface FlashcardSessionProps {
  card: {
    id: string;
    front: string;
    back: string;
    hint: string | null;
    totalDue: number;
  };
  /** Cards already reviewed in this session (for progress display) */
  doneInSession?: number;
}

export function FlashcardSession({ card, doneInSession = 0 }: FlashcardSessionProps) {
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);
  const [pending, startTransition] = useTransition();
  const total = card.totalDue + doneInSession;

  const rate = (quality: ReviewQuality) => {
    startTransition(async () => {
      const result = await rateCardAction({ cardId: card.id, quality });
      if (result.error) {
        toast.error(result.error);
        return;
      }
      const days = result.nextIn ?? 1;
      toast.success(
        days === 1 ? "Yarın tekrar göreceksin" : `${days} gün sonra tekrar`,
        { duration: 1500 },
      );
      setFlipped(false);
      router.refresh();
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div
          className="h-2 w-full overflow-hidden rounded-pill bg-border"
          role="progressbar"
          aria-valuenow={doneInSession}
          aria-valuemin={0}
          aria-valuemax={total}
        >
          <div
            className="h-full rounded-pill bg-primary transition-[width] duration-300"
            style={{ width: `${total > 0 ? ((doneInSession + 1) / total) * 100 : 0}%` }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground tabular-nums">
          {doneInSession + 1} / {total}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        disabled={pending}
        aria-label={flipped ? "Soruyu göster" : "Cevabı göster"}
        className={cn(
          "min-h-[200px] w-full rounded-2xl border-2 bg-card p-8 text-center text-2xl font-semibold transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:opacity-50",
          flipped ? "border-primary bg-primary/5" : "border-border hover:bg-muted",
        )}
      >
        <p>{flipped ? card.back : card.front}</p>
        {!flipped && card.hint && (
          <p className="mt-3 text-sm font-normal italic text-muted-foreground">
            💡 {card.hint}
          </p>
        )}
        <p className="mt-4 inline-flex items-center gap-1 text-xs font-normal text-muted-foreground">
          <ArrowLeft className="size-3 rotate-180" />
          {flipped ? "Çevir → Soru" : "Çevir → Cevap"}
        </p>
      </button>

      <div>
        <p className="mb-2 text-center text-sm text-muted-foreground">
          {flipped ? "Ne kadar zorlandın?" : "Önce çevir, sonra değerlendir"}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {RATINGS.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => rate(r.value)}
              disabled={!flipped || pending}
              className={cn(
                "flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-3 text-sm font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-30",
                r.className,
                flipped && !pending && "hover:-translate-y-0.5 hover:border-current",
              )}
            >
              <span className="text-2xl" aria-hidden>
                {r.emoji}
              </span>
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReviewEmptyState({ onReset }: { onReset?: () => void }) {
  return (
    <div className="rounded-lg border border-dashed border-correct/40 bg-correct/5 p-10 text-center">
      <p className="text-4xl">🎉</p>
      <p className="mt-2 text-2xl font-bold">Tekrar edilecek bir şey yok!</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Bugünlük temizsin. Yarın yeni kartlar için geri gel.
      </p>
      {onReset && (
        <Button onClick={onReset} className="mt-4" variant="outline">
          <RotateCw /> Yenile
        </Button>
      )}
    </div>
  );
}

export function ReviewLoadingState() {
  return (
    <div className="rounded-lg border border-dashed border-border p-10 text-center">
      <Brain className="mx-auto size-10 text-muted-foreground" />
      <p className="mt-3 text-lg font-semibold">Kartlar yükleniyor...</p>
    </div>
  );
}
