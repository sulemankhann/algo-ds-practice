const shuffleArray = require("../../src/arrays/1470-shuffle-the-array");

describe("Shuffle the Array", () => {
  it("should return the shuffled array for n = 3", () => {
    const nums = [2, 5, 1, 3, 4, 7];
    const n = 3;
    const expected = [2, 3, 5, 4, 1, 7];
    expect(shuffleArray(nums, n)).toEqual(expected);
  });

  it("should return the shuffled array for n = 4", () => {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1];
    const n = 4;
    const expected = [1, 4, 2, 3, 3, 2, 4, 1];
    expect(shuffleArray(nums, n)).toEqual(expected);
  });

  it("should return the shuffled array for n = 2", () => {
    const nums = [1, 1, 2, 2];
    const n = 2;
    const expected = [1, 2, 1, 2];
    expect(shuffleArray(nums, n)).toEqual(expected);
  });

  it("should handle edge case with minimum values", () => {
    const nums = [1, 1];
    const n = 1;
    const expected = [1, 1];
    expect(shuffleArray(nums, n)).toEqual(expected);
  });
});
