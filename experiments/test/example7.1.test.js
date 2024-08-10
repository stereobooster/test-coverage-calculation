import { expect, test } from "vitest";
import { experiment } from "../src/example7.1";

test("experiment", () => {
  expect(experiment(null)).toBe(undefined);
  expect(experiment({ something: 1 })).toBe(1);
});
