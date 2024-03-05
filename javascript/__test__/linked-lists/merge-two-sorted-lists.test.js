const { LinkedList } = require("../../src/linked-lists");
const {
  mergeTwoLists,
  mergeTwoListsRecursive,
} = require("../../src/linked-lists/0021-merge-two-sorted-lists");

describe("Merge Two Sorted Lists - Iterative", () => {
  test("handles merging two non-empty lists", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(4);

    const list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(4);

    const expected = new LinkedList();
    expected.append(1);
    expected.append(1);
    expected.append(2);
    expected.append(3);
    expected.append(4);
    expected.append(4);

    const result = mergeTwoLists(list1.head, list2.head);

    expect(result).toEqual(expected.head);
  });

  test("handles merging an empty list with a non-empty list", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.append(0);

    const expected = new LinkedList();
    expected.append(0);

    const result = mergeTwoLists(list1.head, list2.head);

    expect(result).toEqual(expected.head);
  });

  test("handles merging two empty lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = mergeTwoLists(list1.head, list2.head);

    expect(result).toBeNull();
  });
});

describe("Merge Two Sorted Lists - Recursive", () => {
  test("handles merging two non-empty lists", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(4);

    const list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(4);

    const expected = new LinkedList();
    expected.append(1);
    expected.append(1);
    expected.append(2);
    expected.append(3);
    expected.append(4);
    expected.append(4);

    const result = mergeTwoListsRecursive(list1.head, list2.head, true); // 'true' indicates the recursive version

    expect(result).toEqual(expected.head);
  });

  test("handles merging an empty list with a non-empty list", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.append(0);

    const expected = new LinkedList();
    expected.append(0);

    const result = mergeTwoListsRecursive(list1.head, list2.head, true);

    expect(result).toEqual(expected.head);
  });

  test("handles merging two empty lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = mergeTwoListsRecursive(list1.head, list2.head, true);

    expect(result).toBeNull();
  });
});
