const { LinkedList } = require("../../src/linked-lists");
const {
  reverseList,
  reverseListRecursive,
} = require("../../src/linked-lists/0206-reverse-linked-list");

describe("Reverse Linked List - Iterative", () => {
  test("handles reversing a simple linked list", () => {
    const linkedList = new LinkedList();
    [1, 2, 3, 4, 5].forEach((val) => linkedList.append(val));

    const expected = new LinkedList();
    [5, 4, 3, 2, 1].forEach((val) => expected.append(val));

    const result = reverseList(linkedList.head);

    expect(result).toEqual(expected.head);
  });

  test("handles reversing a linked list with two nodes", () => {
    const linkedList = new LinkedList();
    [1, 2].forEach((val) => linkedList.append(val));

    const expected = new LinkedList();
    [2, 1].forEach((val) => expected.append(val));

    const result = reverseList(linkedList.head);

    expect(result).toEqual(expected.head);
  });

  test("handles an empty linked list", () => {
    const linkedList = new LinkedList();

    const result = reverseList(linkedList.head);

    expect(result).toBeNull();
  });
});

describe("Reverse Linked List - Recursive", () => {
  test("handles reversing a simple linked list", () => {
    const linkedList = new LinkedList();
    [1, 2, 3, 4, 5].forEach((val) => linkedList.append(val));

    const expected = new LinkedList();
    [5, 4, 3, 2, 1].forEach((val) => expected.append(val));

    const result = reverseListRecursive(linkedList.head);

    expect(result).toEqual(expected.head);
  });

  test("handles reversing a linked list with two nodes", () => {
    const linkedList = new LinkedList();
    [1, 2].forEach((val) => linkedList.append(val));

    const expected = new LinkedList();
    [2, 1].forEach((val) => expected.append(val));

    const result = reverseListRecursive(linkedList.head);

    expect(result).toEqual(expected.head);
  });

  test("handles an empty linked list", () => {
    const linkedList = new LinkedList();

    const result = reverseListRecursive(linkedList.head);

    expect(result).toBeNull();
  });
});
