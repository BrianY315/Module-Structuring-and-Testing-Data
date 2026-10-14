import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("Recognises positive proper fractions", () => {
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(9, 10), true);
});

test("Rejects improper and whole fractions", () => {
  assert.equal(isProperFraction(2, 1), false);
  assert.equal(isProperFraction(3, 3), false);
  assert.equal(isProperFraction(10, 2), false);
});

test("Handles zero and negative values", () => {
  assert.equal(isProperFraction(0, 5), true);
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-3, -2), false);
});

test("Rejects a zero denominator", () => {
  assert.equal(isProperFraction(0, 0), false);
  assert.equal(isProperFraction(1, 0), false);
});
