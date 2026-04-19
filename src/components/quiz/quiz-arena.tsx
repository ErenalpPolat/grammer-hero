"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Heart, RefreshCw, Sparkles, X } from "lucide-react";
import { QuizFrame } from "./quiz-frame";
import { QuizFooter } from "./quiz-footer";
import { FeedbackPanel } from "./feedback-panel";
import { GameHost, isAnswerReady } from "./game-host";
import { Button } from "@/components/ui/button";
import { EventModalQueue, type QuizEventData } from "@/components/feedback/event-modal-queue";
import { GAME_TYPE_LABELS, type LessonQuiz } from "@/lib/exercise/types";
import { starsFromAccuracy } from "@/lib/exercise/xp";
import { recordQuizCompletionAction } from "@/lib/progress";
import { useLessonState } from "@/hooks/use-lesson-state";
import { cn } from "@/lib/utils";

export interface QuizArenaProps {
  quiz: LessonQuiz;
  exitHref: string;
  lessonDetailHref: string;
}

export function QuizArena({ quiz, exitHref, lessonDetailHref }: QuizArenaProps) {
  const router = useRouter();
  const { state, currentExercise, total, xp, accuracyPct, progress, setAnswer, submit, skip, continueNext } =
    useLessonState(quiz);

  // Enter → submit when ready, or continue when feedback
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (
        state.phase === "answering" &&
        currentExercise &&
        isAnswerReady(currentExercise, state.answer)
      ) {
        submit();
      } else if (state.phase === "feedback") {
        continueNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentExercise, state.phase, state.answer, submit, continueNext]);

  if (state.phase === "completed") {
    return (
      <CompleteScreen
        quiz={quiz}
        accuracyPct={accuracyPct}
        xpTotal={xp.total}
        correctXp={xp.correctXp}
        completionBonus={xp.completionBonus}
        perfectBonus={xp.perfectBonus}
        correctCount={state.correctCount}
        wrongCount={state.wrongCount}
        heartsLeft={state.hearts}
        heartsMax={state.heartsMax}
        lessonDetailHref={lessonDetailHref}
      />
    );
  }

  if (state.phase === "game-over") {
    return <GameOverScreen accuracyPct={accuracyPct} correctCount={state.correctCount} total={total} onRetry={() => router.refresh()} exitHref={exitHref} />;
  }

  if (!currentExercise) return null;

  const locked = state.phase === "feedback";

  return (
    <QuizFrame
      progress={progress}
      hearts={state.hearts}
      heartsMax={state.heartsMax}
      exitHref={exitHref}
    >
      <div className="flex-1">
        <GameHost
          exercise={currentExercise}
          answer={state.answer}
          onAnswerChange={setAnswer}
          locked={locked}
          feedback={state.feedback ? { correct: state.feedback.correct } : null}
        />
      </div>
      {state.phase === "answering" ? (
        <QuizFooter
          canSubmit={isAnswerReady(currentExercise, state.answer)}
          onSubmit={submit}
          onSkip={skip}
        />
      ) : (
        <FeedbackPanel result={state.feedback} onContinue={continueNext} />
      )}
    </QuizFrame>
  );
}

function CompleteScreen({
  quiz,
  accuracyPct,
  xpTotal,
  correctXp,
  completionBonus,
  perfectBonus,
  correctCount,
  wrongCount,
  heartsLeft,
  heartsMax,
  lessonDetailHref,
}: {
  quiz: LessonQuiz;
  accuracyPct: number;
  xpTotal: number;
  correctXp: number;
  completionBonus: number;
  perfectBonus: number;
  correctCount: number;
  wrongCount: number;
  heartsLeft: number;
  heartsMax: number;
  lessonDetailHref: string;
}) {
  const stars = starsFromAccuracy(accuracyPct);
  const [saveState, setSaveState] = useState<
    | { status: "saving" }
    | {
        status: "saved";
        newBest?: boolean;
        streak?: number;
        events: QuizEventData;
      }
    | { status: "error"; message: string }
  >({ status: "saving" });

  // Fire once on mount — record the attempt
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await recordQuizCompletionAction({
        lessonId: quiz.lessonId,
        gameType: quiz.gameType,
        correctCount,
        wrongCount,
        totalQuestions: quiz.exercises.length,
        heartsLeft,
        heartsMax,
        xpEarned: xpTotal,
      });
      if (cancelled) return;
      if (result.error) {
        setSaveState({ status: "error", message: result.error });
      } else {
        setSaveState({
          status: "saved",
          newBest: result.newBest,
          streak: result.user?.currentStreak,
          events: {
            levelUp: result.levelUp,
            streakBroken: result.streakBroken,
            goalReached: result.goalReached,
          },
        });
      }
    })();
    return () => {
      cancelled = true;
    };
    // Only run on mount — intentional single fire
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 px-6 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {quiz.lessonTitle} · {GAME_TYPE_LABELS[quiz.gameType]}
          </p>
          <h1 className="mt-2 text-4xl font-bold">✨ Tebrikler!</h1>
        </div>

        <div className="flex gap-2" aria-label={`${stars} yıldız`}>
          {([0, 1, 2] as const).map((i) => (
            <Star key={i} filled={i < stars} />
          ))}
        </div>

        <div className="grid w-full grid-cols-2 gap-3">
          <StatCard value={`+${xpTotal}`} label="Toplam XP" tone="xp" />
          <StatCard
            value={`%${accuracyPct}`}
            label="Doğruluk"
            tone={accuracyPct >= 80 ? "correct" : "default"}
          />
        </div>

        <div className="w-full space-y-1 rounded-lg border border-border bg-card p-4 text-left text-sm">
          <Row label="Doğru cevaplar" value={`+${correctXp} XP`} />
          {completionBonus > 0 && <Row label="Tamamlama bonusu" value={`+${completionBonus} XP`} />}
          {perfectBonus > 0 && <Row label="🌟 Perfect bonus" value={`+${perfectBonus} XP`} tone="xp" />}
        </div>

        <SaveStatus state={saveState} />

        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="flex-1">
            <Link href={lessonDetailHref}>Başka oyun oyna</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/learn">
              Skill tree <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {saveState.status === "saved" && <EventModalQueue events={saveState.events} />}
    </div>
  );
}

function SaveStatus({
  state,
}: {
  state:
    | { status: "saving" }
    | {
        status: "saved";
        newBest?: boolean;
        streak?: number;
        events: QuizEventData;
      }
    | { status: "error"; message: string };
}) {
  if (state.status === "saving") {
    return (
      <p className="text-sm text-muted-foreground">💾 İlerlemen kaydediliyor…</p>
    );
  }
  if (state.status === "error") {
    return (
      <p className="text-sm text-destructive">⚠ Kaydedilemedi: {state.message}</p>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-2 text-sm">
      {state.newBest && (
        <span className="inline-flex items-center gap-1 rounded-pill bg-correct/20 px-3 py-1 font-semibold text-correct motion-safe:animate-in motion-safe:zoom-in-50">
          <Sparkles className="size-4" /> Yeni en iyi skor
        </span>
      )}
      {state.streak != null && state.streak > 0 && (
        <span className="inline-flex items-center gap-1 rounded-pill bg-streak/20 px-3 py-1 font-semibold text-streak motion-safe:animate-in motion-safe:zoom-in-50">
          🔥 Streak: {state.streak} gün
        </span>
      )}
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(
        "size-16 transition-all duration-300",
        filled ? "fill-xp text-xp motion-safe:animate-in motion-safe:zoom-in-50" : "fill-muted text-muted stroke-border",
      )}
      strokeWidth={1}
      aria-hidden
    >
      <path d="M12 2l2.5 6.5H21l-5 4 2 7-6-4.5-6 4.5 2-7-5-4h6.5z" />
    </svg>
  );
}

function StatCard({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone?: "xp" | "correct" | "default";
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 text-center">
      <p
        className={cn(
          "text-3xl font-bold tabular-nums",
          tone === "xp" && "text-xp",
          tone === "correct" && "text-correct",
        )}
      >
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone?: "xp" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-semibold", tone === "xp" && "text-xp")}>{value}</span>
    </div>
  );
}

function GameOverScreen({
  accuracyPct,
  correctCount,
  total,
  onRetry,
  exitHref,
}: {
  accuracyPct: number;
  correctCount: number;
  total: number;
  onRetry: () => void;
  exitHref: string;
}) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 px-6 py-16 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-incorrect/10">
          <Heart className="size-10 text-muted-foreground/50" aria-hidden />
        </div>
        <div>
          <h1 className="text-3xl font-bold">💔 Canın bitti</h1>
          <p className="mt-2 text-muted-foreground">
            {correctCount} / {total} doğru · %{accuracyPct} başarı
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="flex-1">
            <Link href={exitHref}>
              <X /> Çık
            </Link>
          </Button>
          <Button onClick={onRetry} className="flex-1">
            <RefreshCw /> Tekrar dene
          </Button>
        </div>
      </div>
    </div>
  );
}
