import { expect, test } from "vitest";
import { comp } from "../src/example0.1";

test("compares", () => {
  expect(comp()).toBe(0);
});
