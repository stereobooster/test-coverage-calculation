import { expect, test } from "vitest";
import { experiment } from "../src/example4.1";

test("experiment", () => {
  expect(experiment(1)).toBe(1);
  expect(experiment(2)).toBe(0);
});
