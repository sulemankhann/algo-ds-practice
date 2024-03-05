const getConcatenation = require("../../src/arrays/1929-concatenation-of-array");

describe("getConcatenation", () => {
  test("handles an array with length 1", () => {
    const nums = [1];
    const expected = [1, 1];

    const result = getConcatenation(nums);

    expect(result).toEqual(expected);
  });

  test("handles an array with length 3", () => {
    const nums = [1, 2, 3];
    const expected = [1, 2, 3, 1, 2, 3];

    const result = getConcatenation(nums);

    expect(result).toEqual(expected);
  });

  test("handles an array with length 4", () => {
    const nums = [1, 3, 2, 1];
    const expected = [1, 3, 2, 1, 1, 3, 2, 1];

    const result = getConcatenation(nums);

    expect(result).toEqual(expected);
  });
});
