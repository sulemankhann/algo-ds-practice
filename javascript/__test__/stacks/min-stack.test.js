const MinStack = require("../../src/stacks/0155-min-stack");

describe("MinStack", () => {
  test("handles basic push and pop operations", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  test("handles multiple pushes and pops with getMin", () => {
    const minStack = new MinStack();
    minStack.push(2);
    minStack.push(0);
    minStack.push(3);
    minStack.push(0);

    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
  });

  test("handles edge case with a single element", () => {
    const minStack = new MinStack();
    minStack.push(1);

    expect(minStack.top()).toBe(1);
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(undefined);
  });
});
