const Queue = require("../../src/queues");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should create an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("should enqueue elements to the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
  });

  test("should dequeue elements from the queue in FIFO order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return undefined when dequeueing from an empty queue", () => {
    expect(queue.dequeue()).toBe(undefined);
  });

  test("should maintain correct size after enqueue and dequeue operations", () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(1);

    queue.enqueue(2);
    expect(queue.size).toBe(2);

    queue.dequeue();
    expect(queue.size).toBe(1);

    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size).toBe(0);
  });

  test("should handle multiple types of elements", () => {
    queue.enqueue("hello");
    queue.enqueue({ key: "value" });
    queue.enqueue([1, 2, 3]);

    expect(queue.dequeue()).toBe("hello");
    expect(queue.dequeue()).toEqual({ key: "value" });
    expect(queue.dequeue()).toEqual([1, 2, 3]);
    expect(queue.isEmpty()).toBe(true);
  });
});
