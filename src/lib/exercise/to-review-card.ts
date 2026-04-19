import type { Exercise } from "./types";

export interface ReviewCardData {
  front: string;
  back: string;
  hint?: string;
}

/**
 * Maps a quiz exercise to a flashcard (front/back/hint) for the SM-2 review deck.
 * Memory-match returns null — pairs don't fit the flashcard format.
 */
export function exerciseToReviewCard(exercise: Exercise): ReviewCardData | null {
  switch (exercise.type) {
    case "multiple-choice":
      return {
        front: exercise.prompt,
        back: exercise.options[exercise.answerIndex],
        hint: exercise.explanation,
      };
    case "fill-in-blank":
      return {
        front: exercise.sentence,
        back: exercise.sentence.replace("___", exercise.options[exercise.answerIndex]),
        hint: exercise.hint ?? exercise.explanation,
      };
    case "true-false":
      return {
        front: exercise.sentence,
        back: exercise.isCorrect
          ? "✓ Cümle doğru."
          : exercise.correction ?? "✗ Cümle yanlış.",
        hint: exercise.explanation,
      };
    case "word-bank":
      return {
        front: exercise.translation ?? exercise.prompt ?? "Cümleyi sırala",
        back: exercise.tokens.join(" "),
      };
    case "word-scramble":
      return {
        front: `Harflerden oluştur: ${[...exercise.answer].sort().join("")}`,
        back: exercise.answer,
        hint: exercise.hint,
      };
    case "find-mistake": {
      const fixed = [...exercise.tokens];
      fixed[exercise.wrongIndex] = exercise.correction;
      return {
        front: exercise.tokens.join(" "),
        back: fixed.join(" "),
        hint: exercise.hint,
      };
    }
    case "drag-drop":
      return {
        front: exercise.sentence,
        back: exercise.sentence.replace("___", exercise.options[exercise.answerIndex]),
        hint: exercise.hint,
      };
    case "memory-match":
      return null;
  }
}

/** Batch map — filters out exercises that can't be turned into cards (memory-match). */
export function exercisesToReviewCards(exercises: Exercise[]): ReviewCardData[] {
  return exercises
    .map(exerciseToReviewCard)
    .filter((c): c is ReviewCardData => c !== null);
}
