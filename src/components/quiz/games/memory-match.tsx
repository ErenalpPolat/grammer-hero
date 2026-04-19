"use client";

import { useEffect, useMemo, useState } from "react";
import type { MemoryMatchExercise } from "@/lib/exercise/types";
import { cn } from "@/lib/utils";

export interface MemoryMatchProps {
  exercise: MemoryMatchExercise;
  /** True when all pairs matched */
  answer: boolean | null;
  onAnswerChange: (val: boolean) => void;
  locked: boolean;
  feedback: { correct: boolean } | null;
}

interface Card {
  id: string;
  pairId: number;
  content: string;
}

function shuffle<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function MemoryMatch({
  exercise,
  onAnswerChange,
  locked,
  feedback,
}: MemoryMatchProps) {
  const cards: Card[] = useMemo(() => {
    const result: Card[] = [];
    exercise.pairs.forEach((pair, pairId) => {
      result.push({ id: `${pairId}-l`, pairId, content: pair.left });
      result.push({ id: `${pairId}-r`, pairId, content: pair.right });
    });
    return shuffle(result, exercise.id);
  }, [exercise.id, exercise.pairs]);

  // Internal state is reset on exercise change via the `key={exercise.id}`
  // applied by GameHost — React remounts the component, so we don't need
  // a manual reset effect (which would violate the no-setState-in-effect rule).
  const [firstFlipped, setFirstFlipped] = useState<Card | null>(null);
  const [secondFlipped, setSecondFlipped] = useState<Card | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);

  // Notify parent when all pairs matched
  useEffect(() => {
    if (matched.size === cards.length && cards.length > 0) {
      onAnswerChange(true);
    }
  }, [matched.size, cards.length, onAnswerChange]);

  const handleClick = (card: Card) => {
    if (locked || busy || matched.has(card.id) || firstFlipped?.id === card.id) return;
    if (!firstFlipped) {
      setFirstFlipped(card);
      return;
    }
    setSecondFlipped(card);
    setBusy(true);
    const isMatch = firstFlipped.pairId === card.pairId;
    setTimeout(
      () => {
        if (isMatch) {
          setMatched((prev) => {
            const next = new Set(prev);
            next.add(firstFlipped.id);
            next.add(card.id);
            return next;
          });
        }
        setFirstFlipped(null);
        setSecondFlipped(null);
        setBusy(false);
      },
      isMatch ? 500 : 1100,
    );
  };

  const isFlipped = (id: string) =>
    matched.has(id) || firstFlipped?.id === id || secondFlipped?.id === id;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="space-y-2 text-center">
        <p className="text-sm text-muted-foreground">
          {exercise.prompt ?? "Eşleşen çiftleri bul:"}
        </p>
        <p className="text-xs tabular-nums text-muted-foreground">
          {matched.size / 2} / {exercise.pairs.length} eşleşti
        </p>
      </div>

      <div
        className="grid gap-2 sm:gap-3"
        style={{
          gridTemplateColumns: `repeat(${cards.length <= 8 ? 4 : 4}, minmax(0, 1fr))`,
        }}
      >
        {cards.map((card) => {
          const flipped = isFlipped(card.id);
          const isMatched = matched.has(card.id);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleClick(card)}
              disabled={locked || busy || isMatched}
              aria-label={flipped ? card.content : "Kart kapalı"}
              className={cn(
                "group relative aspect-[3/4] [perspective:1000px]",
                "focus-visible:outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500",
                  flipped && "[transform:rotateY(180deg)]",
                )}
              >
                {/* Back (closed) */}
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center rounded-lg border-2 border-border [backface-visibility:hidden]",
                    "bg-gradient-to-br from-primary/20 via-primary/10 to-violet-500/10 text-3xl",
                    !locked && !isMatched && "group-hover:from-primary/30 group-hover:to-violet-500/20",
                  )}
                  aria-hidden
                >
                  ✨
                </span>
                {/* Front (open) */}
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center rounded-lg border-2 p-1 text-center text-xs font-medium [backface-visibility:hidden] [transform:rotateY(180deg)] sm:text-sm",
                    isMatched
                      ? "border-correct bg-correct/15 text-correct"
                      : feedback?.correct
                        ? "border-correct bg-correct/10"
                        : "border-primary bg-card",
                  )}
                >
                  {card.content}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
