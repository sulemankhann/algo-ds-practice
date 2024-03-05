const LinkedList = require("../../src/linked-lists");

describe("LinkedList", () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
  });

  it("appending elements to end of linked list", () => {
    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.head.val).toBe(10);
    expect(ll.head.next.val).toBe(20);
    expect(ll.head.next.next.val).toBe(30);
    expect(ll.head.next.next.next).toBeNull();
  });

  it("printing the linked list", () => {
    ll.append(10);
    ll.append(20);
    ll.append(30);

    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    ll.print();

    expect(spy).toHaveBeenCalledWith("10->20->30");

    spy.mockRestore();
  });

  it("removing elements from the end of linked list", () => {
    ll.append(10);
    ll.append(20);
    ll.append(30);

    ll.remove();

    expect(ll.head.val).toBe(10);
    expect(ll.head.next.val).toBe(20);
    expect(ll.head.next.next).toBeNull();
  });

  it("appending at a specific index", () => {
    ll.append(10);
    ll.append(20);
    ll.append(30);

    ll.appendAt(1, 25);

    expect(ll.head.val).toBe(10);
    expect(ll.head.next.val).toBe(25);
    expect(ll.head.next.next.val).toBe(20);
    expect(ll.head.next.next.next.val).toBe(30);
    expect(ll.head.next.next.next.next).toBeNull();
  });

  it("removing elements by index", () => {
    ll.append(10);
    ll.append(20);
    ll.append(30);

    ll.removeAt(1);

    expect(ll.head.val).toBe(10);
    expect(ll.head.next.val).toBe(30);
    expect(ll.head.next.next).toBeNull();
  });
});
