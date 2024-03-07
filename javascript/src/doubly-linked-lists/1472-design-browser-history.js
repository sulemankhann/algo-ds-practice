const PageNode = function (url = 0, next = null, prev = null) {
  this.url = url;
  this.next = next;
  this.prev = prev;
};
/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
  this.left = new PageNode();
  this.right = new PageNode();
  const node = new PageNode(homepage);

  node.prev = this.left;
  node.next = this.right;
  this.left.next = node;
  this.right.prev = node;
  this.current = node;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const [node, next, prev] = [new PageNode(url), this.right, this.current];

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;

  this.current = node;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let current = this.current;

  while (steps > 0 && current.prev) {
    current = current.prev;
    steps -= 1;
  }

  this.current = current.prev === null ? this.left.next : current;

  return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let current = this.current;

  while (steps > 0 && current.next) {
    current = current.next;
    steps -= 1;
  }

  this.current = current.next === null ? this.right.prev : current;

  return this.current.url;
};

BrowserHistory.prototype.print = function (data) {
  let current = this.left;
  let msg = "";

  while (current) {
    msg += current.url;
    current = current.next;

    msg += current ? "->" : "";
  }

  console.log(msg);

  current = this.right;
  msg = "";

  while (current) {
    msg += current.url;
    current = current.prev;

    msg += current ? "->" : "";
  }

  console.log(msg);
};
module.exports = BrowserHistory;
