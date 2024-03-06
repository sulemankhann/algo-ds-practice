const MyLinkedList = require("../../src/doubly-linked-lists/0707-design-doubly-linked-list");

describe("Design Linked List - Doubly", () => {
  it("should add at head and tail correctly", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    expect(myLinkedList.get(0)).toBe(1);
    myLinkedList.addAtTail(3);
    expect(myLinkedList.get(1)).toBe(3);
  });

  it("should add at specific index correctly", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    expect(myLinkedList.get(1)).toBe(2);
  });

  it("should delete at specific index correctly", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    myLinkedList.deleteAtIndex(1);
    expect(myLinkedList.get(1)).toBe(3);
  });

  it("should handle multiple operations correctly", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    expect(myLinkedList.get(1)).toBe(2);
    myLinkedList.deleteAtIndex(1);
    expect(myLinkedList.get(1)).toBe(3);
  });

  it("should add a node at the head and delete at a specific index", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1); // List: 1
    myLinkedList.deleteAtIndex(0); // List: (empty)

    // After deleting at index 0, the list should be empty.
    expect(myLinkedList.get(0)).toBe(-1);
  });

  it("should perform a series of operations correctly", () => {
    const myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(7); // List: 7
    myLinkedList.addAtHead(2); // List: 2 -> 7
    myLinkedList.addAtHead(1); // List: 1 -> 2 -> 7
    myLinkedList.addAtIndex(3, 0); // List: 1 -> 2 -> 7 -> 0
    myLinkedList.deleteAtIndex(2); // List: 1 -> 2 -> 0
    myLinkedList.addAtHead(6); // List: 6 -> 1 -> 2 -> 0
    myLinkedList.addAtTail(4); // List: 6 -> 1 -> 2 -> 0 -> 4
    const getValue = myLinkedList.get(4); // Get value at index 4 (Expect 4)
    myLinkedList.addAtHead(4); // List: 4 -> 6 -> 1 -> 2 -> 0 -> 4
    myLinkedList.addAtIndex(5, 0); // List: 4 -> 6 -> 1 -> 2 -> 0 -> 0 -> 4
    myLinkedList.addAtHead(5); // List: 5 -> 4 -> 6 -> 1 -> 2 -> 0 -> 0 -> 4
  });
});
