/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }

    const lastBracket = stack.pop();
    if (bracketPairs[s[i]] !== lastBracket) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
