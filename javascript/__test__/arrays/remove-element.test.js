const removeElement = require("../../src/arrays/0027-remove-element");

describe("remove element", () => {
  test("handles empty array", () => {
    const nums = [];
    const val = 3;
    const expectedNums = [];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  test("handles array with no occurrences of val", () => {
    const nums = [1, 2, 3, 4];
    const val = 5;
    const expectedNums = [1, 2, 3, 4];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  test("handles array with single occurrence of val", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expectedNums = [2, 2];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  test("handles array with multiple occurrences of val", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const expectedNums = [0, 1, 4, 0, 3];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });
});
