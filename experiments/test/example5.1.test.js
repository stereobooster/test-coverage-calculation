import { expect, test } from "vitest";
import { experiment } from "../src/example5.1";

test("experiment", () => {
  expect(experiment("a", 0)).toBe(true);
  expect(experiment("\uD800", 0)).toBe(false);
  expect(experiment("a", Number.MAX_SAFE_INTEGER)).toBe(false);
});
