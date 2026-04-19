import type { GameType, LessonQuiz, QuestionBank } from "@/lib/exercise/types";
import { EXTRA_QUESTIONS } from "./extras";
import { PS1_QUESTIONS } from "./ps-1";
import { PS2_QUESTIONS } from "./ps-2";
import { PS3_QUESTIONS } from "./ps-3";
import { PS4_QUESTIONS } from "./ps-4";
import { PS5_QUESTIONS } from "./ps-5";
import { PS6_QUESTIONS } from "./ps-6";
import { PAST1_QUESTIONS } from "./past-1";
import { PAST2_QUESTIONS } from "./past-2";
import { PAST3_QUESTIONS } from "./past-3";
import { PAST4_QUESTIONS } from "./past-4";
import { PAST5_QUESTIONS } from "./past-5";
import { PAST6_QUESTIONS } from "./past-6";
import { PC1_QUESTIONS } from "./pc-1";
import { PC2_QUESTIONS } from "./pc-2";
import { PC3_QUESTIONS } from "./pc-3";
import { PC4_QUESTIONS } from "./pc-4";
import { PC5_QUESTIONS } from "./pc-5";
import { PC6_QUESTIONS } from "./pc-6";

const BASE_BANKS: Record<string, QuestionBank> = {
  "ps-1": PS1_QUESTIONS,
  "ps-2": PS2_QUESTIONS,
  "ps-3": PS3_QUESTIONS,
  "ps-4": PS4_QUESTIONS,
  "ps-5": PS5_QUESTIONS,
  "ps-6": PS6_QUESTIONS,
  "past-1": PAST1_QUESTIONS,
  "past-2": PAST2_QUESTIONS,
  "past-3": PAST3_QUESTIONS,
  "past-4": PAST4_QUESTIONS,
  "past-5": PAST5_QUESTIONS,
  "past-6": PAST6_QUESTIONS,
  "pc-1": PC1_QUESTIONS,
  "pc-2": PC2_QUESTIONS,
  "pc-3": PC3_QUESTIONS,
  "pc-4": PC4_QUESTIONS,
  "pc-5": PC5_QUESTIONS,
  "pc-6": PC6_QUESTIONS,
};

/** Merge each lesson's base bank with extras (new game types added later). */
const BANKS: Record<string, QuestionBank> = Object.fromEntries(
  Object.entries(BASE_BANKS).map(([lessonId, bank]) => [
    lessonId,
    {
      ...bank,
      byGame: { ...bank.byGame, ...(EXTRA_QUESTIONS[lessonId] ?? {}) },
    },
  ]),
);

export function findLessonQuiz(lessonId: string, gameType: GameType): LessonQuiz | undefined {
  const bank = BANKS[lessonId];
  if (!bank) return undefined;
  const exercises = bank.byGame[gameType];
  if (!exercises || exercises.length === 0) return undefined;
  return {
    lessonId: bank.lessonId,
    lessonTitle: bank.lessonTitle,
    gameType,
    exercises,
  };
}

export function availableGameTypes(lessonId: string): GameType[] {
  const bank = BANKS[lessonId];
  if (!bank) return [];
  return Object.keys(bank.byGame) as GameType[];
}

export function lessonHasQuestions(lessonId: string): boolean {
  return lessonId in BANKS;
}
