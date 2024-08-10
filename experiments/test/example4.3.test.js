import { expect, test } from "vitest";
import { experiment } from "../src/example4.3";

test("experiment", () => {
  expect(experiment(1)).toBe(2);
  expect(experiment(2)).toBe(1);
});
