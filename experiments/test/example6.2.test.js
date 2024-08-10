import { expect, test } from "vitest";
import { experiment } from "../src/example6.2";

test("experiment", () => {
  expect(experiment(0)).toBe(false);
  expect(experiment(1)).toBe(true);
});
