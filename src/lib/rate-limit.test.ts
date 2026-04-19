import { describe, expect, it } from "vitest";
import { checkRateLimit } from "./rate-limit";

describe("checkRateLimit", () => {
  it("allows the first request and decrements remaining", () => {
    const r1 = checkRateLimit("test:1", { maxAttempts: 3, windowMs: 10_000 });
    expect(r1.allowed).toBe(true);
    expect(r1.remaining).toBe(2);

    const r2 = checkRateLimit("test:1", { maxAttempts: 3, windowMs: 10_000 });
    expect(r2.allowed).toBe(true);
    expect(r2.remaining).toBe(1);

    const r3 = checkRateLimit("test:1", { maxAttempts: 3, windowMs: 10_000 });
    expect(r3.allowed).toBe(true);
    expect(r3.remaining).toBe(0);
  });

  it("blocks once limit is exceeded", () => {
    const opts = { maxAttempts: 2, windowMs: 10_000 };
    checkRateLimit("test:2", opts);
    checkRateLimit("test:2", opts);
    const blocked = checkRateLimit("test:2", opts);
    expect(blocked.allowed).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.resetInSeconds).toBeGreaterThan(0);
  });

  it("uses isolated buckets per key", () => {
    const opts = { maxAttempts: 1, windowMs: 10_000 };
    expect(checkRateLimit("test:a", opts).allowed).toBe(true);
    expect(checkRateLimit("test:a", opts).allowed).toBe(false);
    // different key — fresh bucket
    expect(checkRateLimit("test:b", opts).allowed).toBe(true);
  });

  it("resets after window expires", async () => {
    const opts = { maxAttempts: 1, windowMs: 30 };
    expect(checkRateLimit("test:reset", opts).allowed).toBe(true);
    expect(checkRateLimit("test:reset", opts).allowed).toBe(false);
    await new Promise((resolve) => setTimeout(resolve, 60));
    expect(checkRateLimit("test:reset", opts).allowed).toBe(true);
  });
});
