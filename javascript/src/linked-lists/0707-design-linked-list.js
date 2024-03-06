const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const MyLinkedList = function () {
  this.left = new ListNode(0);
  this.right = new ListNode(0);

  this.left.next = this.right;
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

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const [node, next, prev] = [new ListNode(val), this.left.next, this.left];

  node.next = next;
  prev.next = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);

  let curr = this.left;

  while (curr.next !== this.right) {
    curr = curr.next;
  }

  curr.next = node;
  node.next = this.right;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let curr = this.left;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  if (curr && index === 0) {
    const node = new ListNode(val);
    node.next = curr.next;
    curr.next = node;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.left.next = this.left.next.next;
    return;
  }

  let curr = this.left;

  while (curr && index > 0) {
    curr = curr.next;
    index -= 1;
  }

  if (curr && curr != this.right && curr.next != this.right && index === 0) {
    curr.next = curr.next.next;
  }
};

MyLinkedList.prototype.print = function (data) {
  let current = this.left;
  let msg = "";

  while (current) {
    msg += current.val;
    current = current.next;

    msg += current ? "->" : "";
  }

  console.log(msg);
};

module.exports = MyLinkedList;
