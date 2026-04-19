import { describe, expect, it } from "vitest";
import {
  LEAGUE_DEMOTE_COUNT,
  LEAGUE_GROUP_SIZE,
  LEAGUE_MAX_TIER,
  LEAGUE_PROMOTE_COUNT,
} from "@/data/leagues";
import { computeOutcome, getWeekStartUtc, nextWeekStartUtc } from "./league-math";

describe("getWeekStartUtc", () => {
  it("returns Monday 00:00 UTC for a mid-week date", () => {
    // Wednesday 2026-04-15T14:30:00Z → previous Monday 2026-04-13T00:00:00Z
    const wed = new Date("2026-04-15T14:30:00Z");
    const start = getWeekStartUtc(wed);
    expect(start.toISOString()).toBe("2026-04-13T00:00:00.000Z");
  });

  it("returns the same Monday when given Monday 00:00", () => {
    const mon = new Date("2026-04-13T00:00:00Z");
    expect(getWeekStartUtc(mon).toISOString()).toBe(
      "2026-04-13T00:00:00.000Z",
    );
  });

  it("handles Sunday — returns the Monday BEFORE it", () => {
    // Sunday 2026-04-19 → Monday 2026-04-13
    const sun = new Date("2026-04-19T23:59:59Z");
    expect(getWeekStartUtc(sun).toISOString()).toBe(
      "2026-04-13T00:00:00.000Z",
    );
  });

  it("does not drift across DST-affected months (UTC is DST-free)", () => {
    // Europe goes on DST last Sunday of March — UTC should be unaffected
    const marchWed = new Date("2026-03-25T12:00:00Z"); // Wednesday
    const startMar = getWeekStartUtc(marchWed);
    expect(startMar.toISOString()).toBe("2026-03-23T00:00:00.000Z");
  });
});

describe("nextWeekStartUtc", () => {
  it("adds exactly 7 days", () => {
    const start = new Date("2026-04-13T00:00:00Z");
    expect(nextWeekStartUtc(start).toISOString()).toBe(
      "2026-04-20T00:00:00.000Z",
    );
  });
});

describe("computeOutcome", () => {
  const mid = Math.floor(LEAGUE_GROUP_SIZE / 2); // e.g. 7 for size 15

  it("top 1..N with XP → promoted (mid tier)", () => {
    for (let rank = 1; rank <= LEAGUE_PROMOTE_COUNT; rank++) {
      expect(
        computeOutcome({
          rank,
          totalMembers: LEAGUE_GROUP_SIZE,
          tier: 2,
          weeklyXp: 100,
        }),
      ).toBe("promoted");
    }
  });

  it("top rank but zero weeklyXp → NOT promoted (stayed)", () => {
    expect(
      computeOutcome({
        rank: 1,
        totalMembers: LEAGUE_GROUP_SIZE,
        tier: 2,
        weeklyXp: 0,
      }),
    ).toBe("stayed");
  });

  it("bottom M positions → demoted (mid tier)", () => {
    for (let offset = 0; offset < LEAGUE_DEMOTE_COUNT; offset++) {
      const rank = LEAGUE_GROUP_SIZE - offset;
      expect(
        computeOutcome({
          rank,
          totalMembers: LEAGUE_GROUP_SIZE,
          tier: 2,
          weeklyXp: 10,
        }),
      ).toBe("demoted");
    }
  });

  it("middle ranks → stayed", () => {
    expect(
      computeOutcome({
        rank: mid,
        totalMembers: LEAGUE_GROUP_SIZE,
        tier: 2,
        weeklyXp: 50,
      }),
    ).toBe("stayed");
  });

  it("Bronz (tier 0): bottom → stayed (no demotion)", () => {
    expect(
      computeOutcome({
        rank: LEAGUE_GROUP_SIZE,
        totalMembers: LEAGUE_GROUP_SIZE,
        tier: 0,
        weeklyXp: 0,
      }),
    ).toBe("stayed");
  });

  it("Elmas (max tier): top → stayed (no promotion)", () => {
    expect(
      computeOutcome({
        rank: 1,
        totalMembers: LEAGUE_GROUP_SIZE,
        tier: LEAGUE_MAX_TIER,
        weeklyXp: 500,
      }),
    ).toBe("stayed");
  });

  it("Elmas bottom → still demoted", () => {
    expect(
      computeOutcome({
        rank: LEAGUE_GROUP_SIZE,
        totalMembers: LEAGUE_GROUP_SIZE,
        tier: LEAGUE_MAX_TIER,
        weeklyXp: 5,
      }),
    ).toBe("demoted");
  });

  it("partial group (<15 members): promote wins over demote on overlap", () => {
    // 5-üyeli grupta top 3 ve bottom 3 rank 3'te çakışır — promote öncelikli
    expect(
      computeOutcome({ rank: 3, totalMembers: 5, tier: 2, weeklyXp: 10 }),
    ).toBe("promoted");
    expect(
      computeOutcome({ rank: 5, totalMembers: 5, tier: 2, weeklyXp: 10 }),
    ).toBe("demoted");
    expect(
      computeOutcome({ rank: 2, totalMembers: 5, tier: 2, weeklyXp: 100 }),
    ).toBe("promoted");
  });
});
