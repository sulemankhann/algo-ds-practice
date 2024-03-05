const isValid = require("../../src/stacks/0020-valid-parentheses");

describe("isValid", () => {
  test("handles valid parentheses for a simple case", () => {
    const s = "()";
    const expected = true;

    const result = isValid(s);

    expect(result).toBe(expected);
  });

  test("handles valid parentheses for a more complex case", () => {
    const s = "()[]{}";
    const expected = true;

    const result = isValid(s);

    expect(result).toBe(expected);
  });

  test("handles invalid parentheses for a case with mismatched brackets", () => {
    const s = "(]";
    const expected = false;

    const result = isValid(s);

    expect(result).toBe(expected);
  });

  test("handles valid parentheses for a case with nested brackets", () => {
    const s = "{[]}";
    const expected = true;

    const result = isValid(s);

    expect(result).toBe(expected);
  });
});
