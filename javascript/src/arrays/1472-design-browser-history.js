/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
  this.currentIndex = 0;
  this.length = 1;
  this.history = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  if (this.history.length < this.currentIndex + 2) this.history.push(url);
  else this.history[this.currentIndex + 1] = url;

  this.currentIndex += 1;
  this.length = this.currentIndex + 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.currentIndex = Math.max(0, this.currentIndex - steps);

  return this.history[this.currentIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.currentIndex = Math.min(this.length - 1, this.currentIndex + steps);

  return this.history[this.currentIndex];
};

module.exports = BrowserHistory;
