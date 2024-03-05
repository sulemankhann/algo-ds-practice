const removeDuplicates = require("../../src/arrays/0026-remove-duplicates-from-sorted-array");

describe("Remove Duplicates from Sorted Array", () => {
  test("Removes duplicates - [1, 1, 2]", () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);

    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Removes duplicates - [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);

    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("No duplicates - [0, 1, 2, 3, 4]", () => {
    const nums = [0, 1, 2, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);

    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});
