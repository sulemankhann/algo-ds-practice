const ListNode = function (val = null, next = null) {
  this.val = val;
  this.next = next;
};

const Queue = function () {
  this.left = null;
  this.right = null;
  this.size = 0;
};

Queue.prototype.enqueue = function (val) {
  const node = new ListNode(val);

  if (this.right != null) {
    this.right.next = node;
    this.right = node;
  } else {
    this.left = node;
    this.right = node;
  }

  this.size += 1;
};

Queue.prototype.dequeue = function () {
  if (this.left === null) return;

  const val = this.left.val;

  this.left = this.left.next;

  this.size -= 1;

  return val;
};

Queue.prototype.isEmpty = function () {
  return this.left === null;
};

module.exports = Queue;
