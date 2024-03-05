/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let k = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== val) {
      nums[k] = nums[r];
      k++;
    }
  }

  return k;
};

module.exports = removeElement;
