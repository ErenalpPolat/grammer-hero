import { describe, expect, it } from "vitest";
import { computeNewStreak } from "./streak";

const day = (iso: string) => new Date(`${iso}T12:00:00`);

describe("computeNewStreak", () => {
  it("starts streak at 1 when no previous activity", () => {
    expect(computeNewStreak(null, day("2026-04-19"), 0)).toBe(1);
    expect(computeNewStreak(undefined, day("2026-04-19"), 0)).toBe(1);
  });

  it("keeps streak unchanged when activity is on same day (>= 1)", () => {
    const today = day("2026-04-19");
    expect(computeNewStreak(today, today, 5)).toBe(5);
  });

  it("normalizes same-day current=0 to 1", () => {
    const today = day("2026-04-19");
    expect(computeNewStreak(today, today, 0)).toBe(1);
  });

  it("increments by 1 on consecutive day", () => {
    const yesterday = day("2026-04-18");
    const today = day("2026-04-19");
    expect(computeNewStreak(yesterday, today, 5)).toBe(6);
  });

  it("resets to 1 after a gap > 1 day", () => {
    const threeDaysAgo = day("2026-04-15");
    const today = day("2026-04-19");
    expect(computeNewStreak(threeDaysAgo, today, 12)).toBe(1);
  });

  it("handles different time-of-day on same calendar day", () => {
    const morning = new Date("2026-04-19T08:00:00");
    const evening = new Date("2026-04-19T22:30:00");
    expect(computeNewStreak(morning, evening, 5)).toBe(5);
  });

  it("handles consecutive days across month boundary", () => {
    const lastDay = day("2026-03-31");
    const firstDay = day("2026-04-01");
    expect(computeNewStreak(lastDay, firstDay, 7)).toBe(8);
  });
});
