export type GameType =
  | "multiple-choice"
  | "fill-in-blank"
  | "true-false"
  | "word-bank"
  | "word-scramble"
  | "find-mistake"
  | "drag-drop"
  | "memory-match";

export const GAME_TYPE_LABELS: Record<GameType, string> = {
  "multiple-choice": "Çoktan Seçmeli",
  "fill-in-blank": "Fill in the Blank",
  "true-false": "True / False",
  "word-bank": "Cümle Kur",
  "word-scramble": "Kelime Bul",
  "find-mistake": "Hatayı Bul",
  "drag-drop": "Sürükle-Bırak",
  "memory-match": "Eşleştir",
};

interface BaseExercise {
  id: string;
  hint?: string;
  explanation?: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  answerIndex: number;
}

export interface FillInBlankExercise extends BaseExercise {
  type: "fill-in-blank";
  /** Sentence with `___` where blank goes */
  sentence: string;
  options: string[];
  answerIndex: number;
}

export interface TrueFalseExercise extends BaseExercise {
  type: "true-false";
  sentence: string;
  isCorrect: boolean;
  /** For incorrect sentences, the corrected version */
  correction?: string;
}

export interface WordBankExercise extends BaseExercise {
  type: "word-bank";
  prompt?: string;
  /** Turkish translation shown as guide */
  translation?: string;
  /** Target sentence tokens in correct order */
  tokens: string[];
  /** Extra distractor tokens mixed into the bank */
  distractors?: string[];
}

export interface WordScrambleExercise extends BaseExercise {
  type: "word-scramble";
  /** Target word the user must spell from scrambled letters */
  answer: string;
}

export interface FindMistakeExercise extends BaseExercise {
  type: "find-mistake";
  /** Sentence broken into clickable tokens */
  tokens: string[];
  /** Index of the wrong token in `tokens` */
  wrongIndex: number;
  /** Correct version of the wrong token */
  correction: string;
}

export interface DragDropExercise extends BaseExercise {
  type: "drag-drop";
  /** Sentence with `___` for the slot */
  sentence: string;
  /** Draggable options */
  options: string[];
  answerIndex: number;
}

export interface MemoryMatchExercise extends BaseExercise {
  type: "memory-match";
  /** Pairs of related items shown on cards (e.g. tense ↔ example) */
  pairs: Array<{ left: string; right: string }>;
  prompt?: string;
}

export type Exercise =
  | MultipleChoiceExercise
  | FillInBlankExercise
  | TrueFalseExercise
  | WordBankExercise
  | WordScrambleExercise
  | FindMistakeExercise
  | DragDropExercise
  | MemoryMatchExercise;

export interface LessonQuiz {
  lessonId: string;
  lessonTitle: string;
  gameType: GameType;
  exercises: Exercise[];
  /** Total hearts player starts with. Default 3 */
  heartsMax?: number;
}

export interface QuestionBank {
  lessonId: string;
  lessonTitle: string;
  byGame: Partial<Record<GameType, Exercise[]>>;
}
