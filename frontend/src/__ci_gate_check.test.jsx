import { describe, it, expect } from "vitest";

describe("CI gate check (temporary)", () => {
  it("intentionally fails to prove build-and-push is blocked", () => {
    expect(true).toBe(false);
  });
});
