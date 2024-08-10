import { expect, test } from "vitest";
import { experiment } from "../src/example1.3";

test("experiment", () => {
  expect(experiment(false, false)).toBe(0);
  expect(experiment(true, true)).toBe(3);
});
