import { expect, test } from "vitest";
import { experiment } from "../src/example3.4";

test("experiment", () => {
  expect(experiment(true, true)).toBe(1);
  expect(experiment(false, false)).toBe(2);
});
