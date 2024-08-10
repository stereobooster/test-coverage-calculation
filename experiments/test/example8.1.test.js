import { expect, test } from "vitest";
import { experiment } from "../src/example8.1";

test("experiment", () => {
  expect(experiment().next().value).toBe(1);
});
