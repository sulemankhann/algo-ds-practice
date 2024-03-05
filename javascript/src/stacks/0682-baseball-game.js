/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
  let stack = [];
  let sum = 0;

  for (const o of operations) {
    if (o === "+") {
      const val = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(val);
      sum += val;
      continue;
    }

    if (o === "D") {
      const val = stack[stack.length - 1] * 2;
      stack.push(val);
      sum += val;
      continue;
    }

    if (o === "C") {
      sum -= stack.pop();
      continue;
    }

    const val = parseInt(o);
    stack.push(val);
    sum += val;
  }

  return sum;
};

module.exports = calPoints;
