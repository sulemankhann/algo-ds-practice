/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {
  let current = 0,
    nextUnique = 0;

  while (nextUnique < nums.length) {
    if (nums[current] === nums[nextUnique]) {
      nextUnique++;
    } else {
      current++;
      nums[current] = nums[nextUnique];
    }
  }

  return current + 1;
};

module.exports = removeDuplicates;
