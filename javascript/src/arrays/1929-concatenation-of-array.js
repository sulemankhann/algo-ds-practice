/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
  let ans = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < nums.length; j++) {
      ans.push(nums[j]);
    }
  }

  return ans;
};

module.exports = getConcatenation;
