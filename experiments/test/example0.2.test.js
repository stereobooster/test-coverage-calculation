import { expect, test } from "vitest";
import { comp } from "../src/example0.2";

test("compares", () => {
  expect(comp(false)).toBe(0);
  expect(comp(true)).toBe(1);
});
