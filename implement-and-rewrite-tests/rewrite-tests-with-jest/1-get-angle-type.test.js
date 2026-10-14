import { getAngleType } from "../implement/1-get-angle-type.js";

test.each([
  [1, "Acute angle"],
  [45, "Acute angle"],
  [89, "Acute angle"],
  [90, "Right angle"],
  [91, "Obtuse angle"],
  [135, "Obtuse angle"],
  [179, "Obtuse angle"],
  [180, "Straight angle"],
  [181, "Reflex angle"],
  [270, "Reflex angle"],
  [359, "Reflex angle"],
  [0, "Invalid angle"],
  [360, "Invalid angle"],
  [-1, "Invalid angle"],
  [361, "Invalid angle"],
])("classifies an angle of %i degrees", (angle, expectedType) => {
  expect(getAngleType(angle)).toEqual(expectedType);
});

test.each([
  [0.1, "Acute angle"],
  [89.9, "Acute angle"],
  [90.1, "Obtuse angle"],
  [179.9, "Obtuse angle"],
  [180.1, "Reflex angle"],
  [359.9, "Reflex angle"],
])("classifies a boundary-adjacent angle of %i degrees", (angle, expectedType) => {
  expect(getAngleType(angle)).toEqual(expectedType);
});
