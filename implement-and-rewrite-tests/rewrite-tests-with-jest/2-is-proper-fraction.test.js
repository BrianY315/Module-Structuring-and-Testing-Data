import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test.each([
  [1, 2, true],
  [9, 10, true],
  [2, 1, false],
  [3, 3, false],
  [10, 2, false],
  [0, 5, true],
  [-1, 2, true],
  [1, -2, true],
  [-3, -2, false],
  [-1, -2, true],
  [-3, 2, false],
  [3, -2, false],
  [0, 0, false],
  [1, 0, false],
])("checks %i/%i", (numerator, denominator, expected) => {
  expect(isProperFraction(numerator, denominator)).toEqual(expected);
});
