import { describe, expect, it } from "vitest";
import { grade } from "./grader";
import type {
  DragDropExercise,
  FillInBlankExercise,
  FindMistakeExercise,
  MemoryMatchExercise,
  MultipleChoiceExercise,
  TrueFalseExercise,
  WordBankExercise,
  WordScrambleExercise,
} from "./types";

describe("grader", () => {
  describe("multiple-choice", () => {
    const ex: MultipleChoiceExercise = {
      type: "multiple-choice",
      id: "mc-1",
      prompt: "Q?",
      options: ["A", "B", "C", "D"],
      answerIndex: 2,
    };

    it("returns correct=true when answer matches", () => {
      const r = grade(ex, 2);
      expect(r.correct).toBe(true);
      expect(r.correctAnswerLabel).toBe("C");
    });

    it("returns correct=false on wrong index", () => {
      expect(grade(ex, 0).correct).toBe(false);
      expect(grade(ex, 99).correct).toBe(false);
    });

    it("treats non-number answer as wrong", () => {
      expect(grade(ex, null).correct).toBe(false);
      expect(grade(ex, "2").correct).toBe(false);
    });
  });

  describe("fill-in-blank", () => {
    const ex: FillInBlankExercise = {
      type: "fill-in-blank",
      id: "fb-1",
      sentence: "She ___ to school.",
      options: ["go", "goes", "going", "went"],
      answerIndex: 1,
    };

    it("graded by answerIndex", () => {
      expect(grade(ex, 1).correct).toBe(true);
      expect(grade(ex, 0).correct).toBe(false);
    });
  });

  describe("true-false", () => {
    const correctSentence: TrueFalseExercise = {
      type: "true-false",
      id: "tf-1",
      sentence: "She goes to school.",
      isCorrect: true,
    };
    const wrongSentence: TrueFalseExercise = {
      type: "true-false",
      id: "tf-2",
      sentence: "She go to school.",
      isCorrect: false,
      correction: "She goes to school.",
    };

    it("matches boolean answer to isCorrect", () => {
      expect(grade(correctSentence, true).correct).toBe(true);
      expect(grade(correctSentence, false).correct).toBe(false);
      expect(grade(wrongSentence, false).correct).toBe(true);
    });

    it("includes correction in label when present", () => {
      const r = grade(wrongSentence, true);
      expect(r.correct).toBe(false);
      expect(r.correctAnswerLabel).toContain("She goes to school.");
    });

    it("non-boolean answer is wrong", () => {
      expect(grade(correctSentence, null).correct).toBe(false);
      expect(grade(correctSentence, "true").correct).toBe(false);
    });
  });

  describe("word-bank", () => {
    const ex: WordBankExercise = {
      type: "word-bank",
      id: "wb-1",
      tokens: ["I", "play", "football"],
    };

    it("matches when tokens are in correct order", () => {
      expect(grade(ex, ["I", "play", "football"]).correct).toBe(true);
    });

    it("rejects wrong order", () => {
      expect(grade(ex, ["play", "I", "football"]).correct).toBe(false);
    });

    it("rejects mismatched length", () => {
      expect(grade(ex, ["I", "play"]).correct).toBe(false);
      expect(grade(ex, ["I", "play", "football", "extra"]).correct).toBe(false);
    });
  });

  describe("word-scramble", () => {
    const ex: WordScrambleExercise = {
      type: "word-scramble",
      id: "ws-1",
      answer: "play",
    };

    it("case-insensitive match", () => {
      expect(grade(ex, "play").correct).toBe(true);
      expect(grade(ex, "PLAY").correct).toBe(true);
      expect(grade(ex, "Play").correct).toBe(true);
    });

    it("rejects wrong arrangement", () => {
      expect(grade(ex, "ylap").correct).toBe(false);
      expect(grade(ex, "").correct).toBe(false);
    });
  });

  describe("find-mistake", () => {
    const ex: FindMistakeExercise = {
      type: "find-mistake",
      id: "fm-1",
      tokens: ["My", "mother", "go", "to", "work"],
      wrongIndex: 2,
      correction: "goes",
    };

    it("matches wrong token index", () => {
      expect(grade(ex, 2).correct).toBe(true);
      expect(grade(ex, 0).correct).toBe(false);
    });

    it("includes both wrong token and correction in label", () => {
      const r = grade(ex, 0);
      expect(r.correctAnswerLabel).toContain("go");
      expect(r.correctAnswerLabel).toContain("goes");
    });
  });

  describe("drag-drop", () => {
    const ex: DragDropExercise = {
      type: "drag-drop",
      id: "dd-1",
      sentence: "___ you like it?",
      options: ["Do", "Does", "Are"],
      answerIndex: 0,
    };

    it("graded by index", () => {
      expect(grade(ex, 0).correct).toBe(true);
      expect(grade(ex, 1).correct).toBe(false);
    });
  });

  describe("memory-match", () => {
    const ex: MemoryMatchExercise = {
      type: "memory-match",
      id: "mm-1",
      pairs: [
        { left: "I", right: "play" },
        { left: "He", right: "plays" },
      ],
    };

    it("correct only when answer is true", () => {
      expect(grade(ex, true).correct).toBe(true);
      expect(grade(ex, false).correct).toBe(false);
      expect(grade(ex, null).correct).toBe(false);
    });
  });
});
