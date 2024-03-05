const { ListNode } = require(".");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListRecursive = function (head) {
  // base case
  if (head === null || head.next === null) {
    return head;
  }

  let reversedList = reverseListRecursive(head.next);

  head.next.next = head;
  head.next = null;

  return reversedList;
};

module.exports = { reverseList, reverseListRecursive };
