import { describe, expect, it } from "vitest";
import { slugify, userIdFromName } from "./slugify";

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("handles Turkish characters", () => {
    expect(slugify("Polat")).toBe("polat");
    expect(slugify("İstanbul")).toBe("istanbul");
    expect(slugify("Şükrü Çağdaş")).toBe("sukru-cagdas");
    expect(slugify("Öğr. Görv.")).toBe("ogr-gorv");
  });

  it("trims leading/trailing whitespace and hyphens", () => {
    expect(slugify("  Polat  ")).toBe("polat");
    expect(slugify("--Hello--")).toBe("hello");
  });

  it("collapses consecutive non-alphanumeric chars to single hyphen", () => {
    expect(slugify("a!!!b???c")).toBe("a-b-c");
    expect(slugify("a   b\nc")).toBe("a-b-c");
  });

  it("returns empty string for input with no alphanumeric chars", () => {
    expect(slugify("!!!")).toBe("");
    expect(slugify("")).toBe("");
  });

  it("truncates to 32 chars", () => {
    const long = "a".repeat(50);
    expect(slugify(long)).toHaveLength(32);
  });
});

describe("userIdFromName", () => {
  it("prefixes slug with user_", () => {
    expect(userIdFromName("Polat")).toBe("user_polat");
    expect(userIdFromName("Hello World")).toBe("user_hello-world");
  });

  it("throws on empty slug", () => {
    expect(() => userIdFromName("!!!")).toThrow();
    expect(() => userIdFromName("")).toThrow();
  });

  it("produces deterministic ids", () => {
    expect(userIdFromName("Polat")).toBe(userIdFromName("Polat"));
    expect(userIdFromName("polat")).toBe(userIdFromName("Polat")); // case-insensitive
  });
});
