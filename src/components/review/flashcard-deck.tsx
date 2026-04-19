"use client";

import { useState } from "react";
import { ArrowLeft, Brain, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

const RATINGS = [
  { value: "hard", emoji: "😩", label: "Zor", className: "bg-incorrect/10 text-incorrect" },
  { value: "again", emoji: "😐", label: "Tekrar", className: "bg-streak/10 text-streak" },
  { value: "easy", emoji: "🙂", label: "Kolay", className: "bg-primary/10 text-primary" },
  { value: "perfect", emoji: "😎", label: "Mükemmel", className: "bg-correct/10 text-correct" },
] as const;

export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);

  if (cards.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center">
        <Brain className="mx-auto size-10 text-muted-foreground" />
        <p className="mt-3 text-lg font-semibold">Tekrar edilecek bir şey yok 🎉</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Bugünlük temizsin. Yeni dersler aç ki yarın daha fazla tekrar edilebilir kart olsun.
        </p>
      </div>
    );
  }

  const card = cards[index];
  const total = cards.length;

  function rate() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setFlipped(false);
    setIndex(index + 1);
  }

  function reset() {
    setIndex(0);
    setFlipped(false);
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-lg border border-correct/40 bg-correct/5 p-10 text-center">
        <p className="text-4xl">🎉</p>
        <p className="mt-2 text-2xl font-bold">{total} kart tamamlandı!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Yarın yeni tekrar setiyle tekrar gel.
        </p>
        <Button onClick={reset} className="mt-4" variant="outline">
          <RotateCw /> Tekrar başla
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div
          className="h-2 w-full overflow-hidden rounded-pill bg-border"
          role="progressbar"
          aria-valuenow={index}
          aria-valuemin={0}
          aria-valuemax={total}
        >
          <div
            className="h-full rounded-pill bg-primary transition-[width] duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground tabular-nums">
          {index + 1} / {total}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Soruyu göster" : "Cevabı göster"}
        className={cn(
          "min-h-[200px] w-full rounded-2xl border-2 bg-card p-8 text-center text-2xl font-semibold transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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
              onClick={rate}
              disabled={!flipped}
              className={cn(
                "flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-3 text-sm font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-30",
                r.className,
                flipped && "hover:-translate-y-0.5 hover:border-current",
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
