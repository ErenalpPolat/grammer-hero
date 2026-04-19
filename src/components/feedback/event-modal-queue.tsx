"use client";

import { useState } from "react";
import { GoalReachedModal } from "./goal-reached-modal";
import { LevelUpModal } from "./level-up-modal";
import { StreakBrokenModal } from "./streak-broken-modal";

export interface QuizEventData {
  levelUp?: { from: number; to: number } | null;
  streakBroken?: { previousStreak: number } | null;
  goalReached?: { goalMinutes: number; minutesNow: number } | null;
}

type EventName = "levelUp" | "streakBroken" | "goalReached";
const EVENT_ORDER: EventName[] = ["levelUp", "streakBroken", "goalReached"];

/**
 * Shows a queued sequence of celebration modals (one at a time) based on the
 * completion result. The active modal is derived from `events` minus dismissed
 * names — no setState-in-effect anti-pattern.
 */
export function EventModalQueue({ events }: { events: QuizEventData }) {
  const [dismissed, setDismissed] = useState<Set<EventName>>(new Set());
  const active =
    EVENT_ORDER.find((name) => events[name] && !dismissed.has(name)) ?? null;

  const dismiss = (name: EventName) =>
    setDismissed((prev) => {
      const next = new Set(prev);
      next.add(name);
      return next;
    });

  return (
    <>
      {events.levelUp && (
        <LevelUpModal
          open={active === "levelUp"}
          onOpenChange={(o) => !o && dismiss("levelUp")}
          fromLevel={events.levelUp.from}
          toLevel={events.levelUp.to}
        />
      )}
      {events.streakBroken && (
        <StreakBrokenModal
          open={active === "streakBroken"}
          onOpenChange={(o) => !o && dismiss("streakBroken")}
          previousStreak={events.streakBroken.previousStreak}
        />
      )}
      {events.goalReached && (
        <GoalReachedModal
          open={active === "goalReached"}
          onOpenChange={(o) => !o && dismiss("goalReached")}
          goalMinutes={events.goalReached.goalMinutes}
          minutesNow={events.goalReached.minutesNow}
        />
      )}
    </>
  );
}
