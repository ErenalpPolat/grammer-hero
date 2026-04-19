import { describe, expect, it } from "vitest";
import { computeXp, gemsForQuiz, levelFromXp, starsFromAccuracy } from "./xp";

describe("computeXp", () => {
  it("rewards correct answers + completion bonus when passed", () => {
    const xp = computeXp({
      correctCount: 8,
      total: 10,
      heartsLeft: 2,
      heartsMax: 3,
      skippedCount: 0,
    });
    expect(xp.correctXp).toBe(80);
    expect(xp.completionBonus).toBe(50);
    expect(xp.perfectBonus).toBe(0);
    expect(xp.skipPenalty).toBe(0);
    expect(xp.total).toBe(130);
  });

  it("awards perfect bonus when no hearts lost and passed", () => {
    const xp = computeXp({
      correctCount: 10,
      total: 10,
      heartsLeft: 3,
      heartsMax: 3,
      skippedCount: 0,
    });
    expect(xp.perfectBonus).toBe(50);
    expect(xp.total).toBe(100 + 50 + 50);
  });

  it("does not award completion bonus when accuracy < 60%", () => {
    const xp = computeXp({
      correctCount: 5,
      total: 10,
      heartsLeft: 0,
      heartsMax: 3,
      skippedCount: 0,
    });
    expect(xp.completionBonus).toBe(0);
    expect(xp.perfectBonus).toBe(0);
    expect(xp.total).toBe(50);
  });

  it("subtracts skip penalty (5 per skip)", () => {
    const xp = computeXp({
      correctCount: 8,
      total: 10,
      heartsLeft: 3,
      heartsMax: 3,
      skippedCount: 2,
    });
    expect(xp.skipPenalty).toBe(10);
    expect(xp.total).toBe(80 + 50 + 50 - 10);
  });

  it("never returns negative total even with many skips", () => {
    const xp = computeXp({
      correctCount: 0,
      total: 10,
      heartsLeft: 0,
      heartsMax: 3,
      skippedCount: 100,
    });
    expect(xp.total).toBe(0);
  });
});

describe("levelFromXp", () => {
  it("starts at level 1 for 0 XP", () => {
    expect(levelFromXp(0)).toBe(1);
  });

  it("stays at level 1 for 999 XP (just below threshold)", () => {
    expect(levelFromXp(999)).toBe(1);
  });

  it("advances to level 2 at exactly 1000 XP", () => {
    expect(levelFromXp(1000)).toBe(2);
  });

  it("advances level for each 1000 XP", () => {
    expect(levelFromXp(2500)).toBe(3);
    expect(levelFromXp(5000)).toBe(6);
    expect(levelFromXp(10_000)).toBe(11);
  });
});

describe("starsFromAccuracy", () => {
  it("returns 0 stars below 60%", () => {
    expect(starsFromAccuracy(0)).toBe(0);
    expect(starsFromAccuracy(59)).toBe(0);
  });

  it("returns 1 star at 60-79%", () => {
    expect(starsFromAccuracy(60)).toBe(1);
    expect(starsFromAccuracy(79)).toBe(1);
  });

  it("returns 2 stars at 80-94%", () => {
    expect(starsFromAccuracy(80)).toBe(2);
    expect(starsFromAccuracy(94)).toBe(2);
  });

  it("returns 3 stars at 95+%", () => {
    expect(starsFromAccuracy(95)).toBe(3);
    expect(starsFromAccuracy(100)).toBe(3);
  });
});

describe("gemsForQuiz", () => {
  it("scales with star count", () => {
    expect(gemsForQuiz(0)).toBe(0);
    expect(gemsForQuiz(1)).toBe(5);
    expect(gemsForQuiz(2)).toBe(10);
    expect(gemsForQuiz(3)).toBe(15);
  });
});
