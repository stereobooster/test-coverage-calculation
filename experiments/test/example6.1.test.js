import { expect, test } from "vitest";
import { experiment } from "../src/example6.1";

test("experiment", () => {
  expect(experiment(0)).toBe(false);
  expect(experiment(1)).toBe(true);
});
