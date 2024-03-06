const MyLinkedList = require("../../src/linked-lists/0707-design-linked-list");

describe("Design Linked List", () => {
  test("adds at head and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);

    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(3);
    expect(linkedList.get(2)).toBe(-1); // Index out of bounds
  });

  test("adds at tail and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtTail(3);
    linkedList.addAtTail(4);

    expect(linkedList.get(0)).toBe(3);
    expect(linkedList.get(1)).toBe(4);
    expect(linkedList.get(2)).toBe(-1); // Index out of bounds
  });

  test("adds at index and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2);

    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(3);
    expect(linkedList.get(3)).toBe(-1); // Index out of bounds
  });

  test("deletes at index and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2);
    linkedList.deleteAtIndex(1);

    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(3);
    expect(linkedList.get(2)).toBe(-1); // Index out of bounds
  });

  test("adds at head, deletes at index, and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.deleteAtIndex(0);

    expect(linkedList.get(0)).toBe(-1); // List is empty after deletion
  });

  test("adds at head, tail, index, deletes at index, and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2);

    expect(linkedList.get(1)).toBe(2);

    linkedList.deleteAtIndex(0);

    expect(linkedList.get(0)).toBe(2);
  });

  test("adds at head, deletes at index, adds at tail, gets, deletes at index, and gets correctly", () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(2);
    linkedList.deleteAtIndex(1);
    linkedList.addAtHead(2);
    linkedList.addAtHead(7);
    linkedList.addAtHead(3);
    linkedList.addAtHead(2);
    linkedList.addAtHead(5);
    linkedList.addAtHead(5);
    linkedList.addAtTail(5);

    expect(linkedList.get(5)).toBe(2);

    linkedList.deleteAtIndex(6);
    linkedList.deleteAtIndex(4);

    expect(linkedList.get(0)).toBe(5);
  });

  test("should perform a series of operations correctly", () => {
    const linkedList = new MyLinkedList();

    // Add nodes at specific indices
    linkedList.addAtIndex(0, 10); // List: 10
    linkedList.addAtIndex(0, 20); // List: 20 -> 10
    linkedList.addAtIndex(1, 30); // List: 20 -> 30 -> 10

    // Get values at specific indices
    expect(linkedList.get(0)).toBe(20); // Expect 20
    expect(linkedList.get(1)).toBe(30); // Expect 30
    expect(linkedList.get(2)).toBe(10); // Expect 10
  });

  test("should perform a series of operations correctly -1", () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2);

    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(3)).toBe(-1);

    linkedList.deleteAtIndex(1);
    expect(linkedList.get(1)).toBe(3);

    linkedList.deleteAtIndex(3);
    expect(linkedList.get(3)).toBe(-1);

    linkedList.deleteAtIndex(0);
    expect(linkedList.get(0)).toBe(3);
    expect(linkedList.get(1)).toBe(-1);

    linkedList.deleteAtIndex(0);
    expect(linkedList.get(0)).toBe(-1);
  });
});
