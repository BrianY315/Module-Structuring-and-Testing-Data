export function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count < 0) {
    throw new Error("count must not be negative");
  }

  let result = "";

  for (let i = 0; i < count; i += 1) {
    result += str;
  }

  return result;
}
