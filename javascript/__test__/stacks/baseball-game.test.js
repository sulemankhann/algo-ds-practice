const calPoints = require("../../src/stacks/0682-baseball-game");

describe("calPoints", () => {
  test("handles a simple sequence of operations", () => {
    const ops = ["5", "2", "C", "D", "+"];
    const expected = 30;

    const result = calPoints(ops);

    expect(result).toBe(expected);
  });

  test("handles a more complex sequence of operations", () => {
    const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
    const expected = 27;

    const result = calPoints(ops);

    expect(result).toBe(expected);
  });

  test("handles a sequence with only one operation", () => {
    const ops = ["1", "C"];
    const expected = 0;

    const result = calPoints(ops);

    expect(result).toBe(expected);
  });
});
