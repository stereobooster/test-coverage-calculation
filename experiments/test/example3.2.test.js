import { expect, test } from "vitest";
import { experiment } from "../src/example3.2";

test("experiment", () => {
  expect(experiment(false, false)).toBe(false);
  expect(experiment(true, true)).toBe(true);
});
