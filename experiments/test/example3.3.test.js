import { expect, test } from "vitest";
import { experiment } from "../src/example3.3";

test("experiment", () => {
  expect(experiment(true)).toBe(1);
  expect(experiment(false)).toBe(2);
});
