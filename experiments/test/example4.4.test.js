import { expect, test } from "vitest";
import { experiment } from "../src/example4.4";

test("experiment", () => {
  expect(experiment(1)).toBe(3);
  expect(experiment(2)).toBe(1);
  expect(experiment(3)).toBe(2);
});
