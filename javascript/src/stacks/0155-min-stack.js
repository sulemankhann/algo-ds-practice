const MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 *
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0 && this.min.length === 0) {
    this.stack.push(val);
    this.min.push(val);
  } else {
    const currentMin = this.min[this.min.length - 1];
    this.stack.push(val);
    this.min.push(Math.min(currentMin, val));
  }
};

/**
 * @return {void}
 *
 *
 */
MinStack.prototype.pop = function (val) {
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.min.length > 0) {
    return this.min[this.min.length - 1];
  }
};

module.exports = MinStack;
