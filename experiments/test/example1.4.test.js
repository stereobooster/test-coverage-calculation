import { expect, test } from "vitest";
import { experiment } from "../src/example1.4";

test("experiment", () => {
  expect(experiment(false, false, false)).toBe(0);
  expect(experiment(true, true, true)).toBe(7);
});
