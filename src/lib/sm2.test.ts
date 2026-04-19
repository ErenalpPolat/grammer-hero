import { describe, expect, it } from "vitest";
import { applySM2 } from "./sm2";

describe("applySM2", () => {
  const initial = { easinessFactor: 2.5, interval: 1, repetitions: 0 };

  it("perfect rating on first review → interval 1, reps=1, EF up", () => {
    const r = applySM2(initial, "perfect");
    expect(r.repetitions).toBe(1);
    expect(r.interval).toBe(1);
    expect(r.easinessFactor).toBeGreaterThan(2.5);
  });

  it("second perfect → interval 6", () => {
    const after1 = applySM2(initial, "perfect");
    const r = applySM2(after1, "perfect");
    expect(r.repetitions).toBe(2);
    expect(r.interval).toBe(6);
  });

  it("third perfect → interval ≈ 6 * EF", () => {
    let s = applySM2(initial, "perfect");
    s = applySM2(s, "perfect");
    s = applySM2(s, "perfect");
    expect(s.repetitions).toBe(3);
    // 6 * ~2.6 = ~15.6 → rounds
    expect(s.interval).toBeGreaterThanOrEqual(15);
    expect(s.interval).toBeLessThanOrEqual(17);
  });

  it("again rating resets repetitions to 0 and interval to 1", () => {
    let s = applySM2(initial, "perfect");
    s = applySM2(s, "perfect");
    s = applySM2(s, "again");
    expect(s.repetitions).toBe(0);
    expect(s.interval).toBe(1);
  });

  it("again still adjusts EF down", () => {
    const r = applySM2(initial, "again");
    expect(r.easinessFactor).toBeLessThan(2.5);
  });

  it("EF never goes below 1.3", () => {
    let s = initial;
    for (let i = 0; i < 20; i++) {
      s = applySM2(s, "again");
    }
    expect(s.easinessFactor).toBeGreaterThanOrEqual(1.3);
  });

  it("hard rating advances repetitions but reduces EF", () => {
    const r = applySM2(initial, "hard");
    expect(r.repetitions).toBe(1);
    expect(r.easinessFactor).toBeLessThan(2.5);
  });
});
