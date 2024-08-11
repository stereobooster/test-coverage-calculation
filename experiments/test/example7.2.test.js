import { expect, test } from "vitest";
import { experiment } from "../src/example7.2";

test("experiment", () => {
  expect(experiment(null)).toBe(undefined);
});
