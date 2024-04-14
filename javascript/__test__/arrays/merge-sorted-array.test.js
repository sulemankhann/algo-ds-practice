const merge = require("../../src/arrays/0088-merge-sorted-array");

describe("Merge Sorted Array", () => {
  it("should merge two sorted arrays into a single sorted array - Example 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should merge two sorted arrays into a single sorted array - Example 2", () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("should merge two sorted arrays into a single sorted array - Example 3", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("should merge two sorted arrays into a single sorted array - Additional Test 1", () => {
    const nums1 = [1, 2, 4, 5, 6, 0];
    const m = 5;
    const nums2 = [3];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge two sorted arrays into a single sorted array - Additional Test 2", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
