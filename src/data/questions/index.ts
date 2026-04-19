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
import { FUT1_QUESTIONS } from "./fut-1";
import { FUT2_QUESTIONS } from "./fut-2";
import { FUT3_QUESTIONS } from "./fut-3";
import { FUT4_QUESTIONS } from "./fut-4";
import { FUT5_QUESTIONS } from "./fut-5";
import { FUT6_QUESTIONS } from "./fut-6";
import { PERF1_QUESTIONS } from "./perf-1";
import { PERF2_QUESTIONS } from "./perf-2";
import { PERF3_QUESTIONS } from "./perf-3";
import { PERF4_QUESTIONS } from "./perf-4";
import { PERF5_QUESTIONS } from "./perf-5";
import { PERF6_QUESTIONS } from "./perf-6";
import { MOD1_QUESTIONS } from "./mod-1";
import { MOD2_QUESTIONS } from "./mod-2";
import { MOD3_QUESTIONS } from "./mod-3";
import { MOD4_QUESTIONS } from "./mod-4";
import { MOD5_QUESTIONS } from "./mod-5";
import { MOD6_QUESTIONS } from "./mod-6";
import { COND1_QUESTIONS } from "./cond-1";
import { COND2_QUESTIONS } from "./cond-2";
import { COND3_QUESTIONS } from "./cond-3";
import { COND4_QUESTIONS } from "./cond-4";
import { COND5_QUESTIONS } from "./cond-5";
import { COND6_QUESTIONS } from "./cond-6";
import { PASS1_QUESTIONS } from "./pass-1";
import { PASS2_QUESTIONS } from "./pass-2";
import { PASS3_QUESTIONS } from "./pass-3";
import { PASS4_QUESTIONS } from "./pass-4";
import { PASS5_QUESTIONS } from "./pass-5";
import { PASS6_QUESTIONS } from "./pass-6";
import { PCP1_QUESTIONS } from "./pcp-1";
import { PCP2_QUESTIONS } from "./pcp-2";
import { PCP3_QUESTIONS } from "./pcp-3";
import { PCP4_QUESTIONS } from "./pcp-4";
import { PCP5_QUESTIONS } from "./pcp-5";
import { PCP6_QUESTIONS } from "./pcp-6";
import { USED1_QUESTIONS } from "./used-1";
import { USED2_QUESTIONS } from "./used-2";
import { USED3_QUESTIONS } from "./used-3";
import { USED4_QUESTIONS } from "./used-4";
import { USED5_QUESTIONS } from "./used-5";
import { USED6_QUESTIONS } from "./used-6";
import { COMP1_QUESTIONS } from "./comp-1";
import { COMP2_QUESTIONS } from "./comp-2";
import { COMP3_QUESTIONS } from "./comp-3";
import { COMP4_QUESTIONS } from "./comp-4";
import { COMP5_QUESTIONS } from "./comp-5";
import { COMP6_QUESTIONS } from "./comp-6";
import { ART1_QUESTIONS } from "./art-1";
import { ART2_QUESTIONS } from "./art-2";
import { ART3_QUESTIONS } from "./art-3";
import { ART4_QUESTIONS } from "./art-4";
import { ART5_QUESTIONS } from "./art-5";
import { ART6_QUESTIONS } from "./art-6";
import { QTAG1_QUESTIONS } from "./qtag-1";
import { QTAG2_QUESTIONS } from "./qtag-2";
import { QTAG3_QUESTIONS } from "./qtag-3";
import { QTAG4_QUESTIONS } from "./qtag-4";
import { QTAG5_QUESTIONS } from "./qtag-5";
import { QTAG6_QUESTIONS } from "./qtag-6";
import { RS1_QUESTIONS } from "./rs-1";
import { RS2_QUESTIONS } from "./rs-2";
import { RS3_QUESTIONS } from "./rs-3";
import { RS4_QUESTIONS } from "./rs-4";
import { RS5_QUESTIONS } from "./rs-5";
import { RS6_QUESTIONS } from "./rs-6";
import { REL1_QUESTIONS } from "./rel-1";
import { REL2_QUESTIONS } from "./rel-2";
import { REL3_QUESTIONS } from "./rel-3";
import { REL4_QUESTIONS } from "./rel-4";
import { REL5_QUESTIONS } from "./rel-5";
import { REL6_QUESTIONS } from "./rel-6";
import { GI1_QUESTIONS } from "./gi-1";
import { GI2_QUESTIONS } from "./gi-2";
import { GI3_QUESTIONS } from "./gi-3";
import { GI4_QUESTIONS } from "./gi-4";
import { GI5_QUESTIONS } from "./gi-5";
import { GI6_QUESTIONS } from "./gi-6";
import { PHV1_QUESTIONS } from "./phv-1";
import { PHV2_QUESTIONS } from "./phv-2";
import { PHV3_QUESTIONS } from "./phv-3";
import { PHV4_QUESTIONS } from "./phv-4";
import { PHV5_QUESTIONS } from "./phv-5";
import { PHV6_QUESTIONS } from "./phv-6";

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
  "fut-1": FUT1_QUESTIONS,
  "fut-2": FUT2_QUESTIONS,
  "fut-3": FUT3_QUESTIONS,
  "fut-4": FUT4_QUESTIONS,
  "fut-5": FUT5_QUESTIONS,
  "fut-6": FUT6_QUESTIONS,
  "perf-1": PERF1_QUESTIONS,
  "perf-2": PERF2_QUESTIONS,
  "perf-3": PERF3_QUESTIONS,
  "perf-4": PERF4_QUESTIONS,
  "perf-5": PERF5_QUESTIONS,
  "perf-6": PERF6_QUESTIONS,
  "mod-1": MOD1_QUESTIONS,
  "mod-2": MOD2_QUESTIONS,
  "mod-3": MOD3_QUESTIONS,
  "mod-4": MOD4_QUESTIONS,
  "mod-5": MOD5_QUESTIONS,
  "mod-6": MOD6_QUESTIONS,
  "cond-1": COND1_QUESTIONS,
  "cond-2": COND2_QUESTIONS,
  "cond-3": COND3_QUESTIONS,
  "cond-4": COND4_QUESTIONS,
  "cond-5": COND5_QUESTIONS,
  "cond-6": COND6_QUESTIONS,
  "pass-1": PASS1_QUESTIONS,
  "pass-2": PASS2_QUESTIONS,
  "pass-3": PASS3_QUESTIONS,
  "pass-4": PASS4_QUESTIONS,
  "pass-5": PASS5_QUESTIONS,
  "pass-6": PASS6_QUESTIONS,
  "pcp-1": PCP1_QUESTIONS,
  "pcp-2": PCP2_QUESTIONS,
  "pcp-3": PCP3_QUESTIONS,
  "pcp-4": PCP4_QUESTIONS,
  "pcp-5": PCP5_QUESTIONS,
  "pcp-6": PCP6_QUESTIONS,
  "used-1": USED1_QUESTIONS,
  "used-2": USED2_QUESTIONS,
  "used-3": USED3_QUESTIONS,
  "used-4": USED4_QUESTIONS,
  "used-5": USED5_QUESTIONS,
  "used-6": USED6_QUESTIONS,
  "comp-1": COMP1_QUESTIONS,
  "comp-2": COMP2_QUESTIONS,
  "comp-3": COMP3_QUESTIONS,
  "comp-4": COMP4_QUESTIONS,
  "comp-5": COMP5_QUESTIONS,
  "comp-6": COMP6_QUESTIONS,
  "art-1": ART1_QUESTIONS,
  "art-2": ART2_QUESTIONS,
  "art-3": ART3_QUESTIONS,
  "art-4": ART4_QUESTIONS,
  "art-5": ART5_QUESTIONS,
  "art-6": ART6_QUESTIONS,
  "qtag-1": QTAG1_QUESTIONS,
  "qtag-2": QTAG2_QUESTIONS,
  "qtag-3": QTAG3_QUESTIONS,
  "qtag-4": QTAG4_QUESTIONS,
  "qtag-5": QTAG5_QUESTIONS,
  "qtag-6": QTAG6_QUESTIONS,
  "rs-1": RS1_QUESTIONS,
  "rs-2": RS2_QUESTIONS,
  "rs-3": RS3_QUESTIONS,
  "rs-4": RS4_QUESTIONS,
  "rs-5": RS5_QUESTIONS,
  "rs-6": RS6_QUESTIONS,
  "rel-1": REL1_QUESTIONS,
  "rel-2": REL2_QUESTIONS,
  "rel-3": REL3_QUESTIONS,
  "rel-4": REL4_QUESTIONS,
  "rel-5": REL5_QUESTIONS,
  "rel-6": REL6_QUESTIONS,
  "gi-1": GI1_QUESTIONS,
  "gi-2": GI2_QUESTIONS,
  "gi-3": GI3_QUESTIONS,
  "gi-4": GI4_QUESTIONS,
  "gi-5": GI5_QUESTIONS,
  "gi-6": GI6_QUESTIONS,
  "phv-1": PHV1_QUESTIONS,
  "phv-2": PHV2_QUESTIONS,
  "phv-3": PHV3_QUESTIONS,
  "phv-4": PHV4_QUESTIONS,
  "phv-5": PHV5_QUESTIONS,
  "phv-6": PHV6_QUESTIONS,
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
