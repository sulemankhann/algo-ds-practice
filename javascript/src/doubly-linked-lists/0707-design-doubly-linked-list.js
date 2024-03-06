const ListNode = function (val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
};

const MyLinkedList = function () {
  this.left = new ListNode(0);
  this.right = new ListNode(0);
  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const [node, next, prev] = [new ListNode(val), this.left.next, this.left];

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

// 0-1-0
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const [node, next, prev] = [new ListNode(val), this.right, this.right.prev];

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  if (curr && index === 0) {
    const [node, next, prev] = [new ListNode(val), curr, curr.prev];

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }
};

/**
 * @param {number} index
 * @return {void}
 *
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  if (curr && curr != this.right && index === 0) {
    const [next, prev] = [curr.next, curr.prev];

    next.prev = prev;
    prev.next = next;
  }
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.left.next;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  if (curr && curr != this.right && index === 0) return curr.val;

  return -1;
};

module.exports = MyLinkedList;
