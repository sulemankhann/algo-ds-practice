const { DoublyLinkedList } = require("../../src/doubly-linked-lists");

describe("DoublyLinkedList", () => {
  let dll;

  beforeEach(() => {
    dll = new DoublyLinkedList();
  });

  it("append elements to the doubly linked list", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    expect(dll.head.val).toBe(1);
    expect(dll.head.next.val).toBe(3);
    expect(dll.head.next.next.val).toBe(4);
    expect(dll.head.next.next.next).toBeNull();
  });

  it("print the doubly linked list forward and backward", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    dll.printForward();
    dll.printBackward();

    expect(spy).toHaveBeenCalledWith("1<->3<->4");
    expect(spy).toHaveBeenCalledWith("4<->3<->1");

    spy.mockRestore();
  });

  it("remove last element from the doubly linked list", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    dll.remove();

    expect(dll.head.val).toBe(1);
    expect(dll.head.next.val).toBe(3);
    expect(dll.tail.val).toBe(3);
    expect(dll.head.next.next).toBeNull();
  });

  it("append at a specific index in the doubly linked list", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    dll.appendAt(1, 2);

    expect(dll.head.val).toBe(1);
    expect(dll.head.next.val).toBe(2);
    expect(dll.head.next.next.val).toBe(3);
    expect(dll.head.next.next.next.val).toBe(4);
    expect(dll.head.next.next.next.next).toBeNull();
  });

  it("remove elements by index from the doubly linked list", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    dll.removeAt(1);

    expect(dll.head.val).toBe(1);
    expect(dll.head.next.val).toBe(4);
    expect(dll.tail.val).toBe(4);
    expect(dll.head.next.next).toBeNull();
  });

  it("remove last element from an empty doubly linked list", () => {
    dll.remove();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
  });

  it("remove at a negative index from the doubly linked list", () => {
    dll.append(1);
    dll.append(3);
    dll.append(4);

    dll.removeAt(-1);

    expect(dll.head.val).toBe(1);
    expect(dll.head.next.val).toBe(3);
    expect(dll.head.next.next.val).toBe(4);
    expect(dll.head.next.next.next).toBeNull();
  });
});
