import { expect, test } from "vitest";
import { comp } from "../src/example2.1";

test("compares", () => {
  expect(comp(1, 1)).toBe(0);
  expect(comp(1, 0)).toBe(1);
  expect(comp(0, 1)).toBe(-1);
});
