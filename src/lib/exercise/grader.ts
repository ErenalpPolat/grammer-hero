import type { Exercise } from "./types";

export interface GradeResult {
  correct: boolean;
  correctAnswerLabel: string;
  explanation?: string;
}

/**
 * Grade a user's answer for an exercise.
 * - MC/Fill/DragDrop: `answer` is selected option index (number)
 * - True/False: `answer` is boolean
 * - Word-bank: `answer` is ordered string[] (tokens)
 * - Word-scramble: `answer` is assembled string
 * - Find-mistake: `answer` is the index of clicked token (number)
 * - Memory-match: `answer` is `true` when all pairs matched
 */
export function grade(exercise: Exercise, answer: unknown): GradeResult {
  switch (exercise.type) {
    case "multiple-choice":
    case "fill-in-blank":
    case "drag-drop": {
      const idx = typeof answer === "number" ? answer : -1;
      return {
        correct: idx === exercise.answerIndex,
        correctAnswerLabel: exercise.options[exercise.answerIndex] ?? "",
        explanation: exercise.explanation,
      };
    }
    case "true-false": {
      const bool = typeof answer === "boolean" ? answer : null;
      const correct = bool === exercise.isCorrect;
      return {
        correct,
        correctAnswerLabel: exercise.correction
          ? `Doğrusu: "${exercise.correction}"`
          : exercise.isCorrect
            ? "Doğru"
            : "Yanlış",
        explanation: exercise.explanation,
      };
    }
    case "word-bank": {
      const tokens = Array.isArray(answer) ? (answer as string[]) : [];
      const correct =
        tokens.length === exercise.tokens.length &&
        tokens.every((t, i) => t === exercise.tokens[i]);
      return {
        correct,
        correctAnswerLabel: exercise.tokens.join(" "),
        explanation: exercise.explanation,
      };
    }
    case "word-scramble": {
      const word = typeof answer === "string" ? answer : "";
      return {
        correct: word.toLocaleLowerCase("en") === exercise.answer.toLocaleLowerCase("en"),
        correctAnswerLabel: exercise.answer,
        explanation: exercise.explanation,
      };
    }
    case "find-mistake": {
      const idx = typeof answer === "number" ? answer : -1;
      return {
        correct: idx === exercise.wrongIndex,
        correctAnswerLabel: `"${exercise.tokens[exercise.wrongIndex]}" → "${exercise.correction}"`,
        explanation: exercise.explanation,
      };
    }
    case "memory-match": {
      return {
        correct: answer === true,
        correctAnswerLabel: `${exercise.pairs.length} eşleşme`,
        explanation: exercise.explanation,
      };
    }
  }
}
