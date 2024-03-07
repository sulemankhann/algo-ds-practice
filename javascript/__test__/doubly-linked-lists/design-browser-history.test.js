const BrowserHistory = require("../../src/doubly-linked-lists/1472-design-browser-history");

describe("Design Browser history", () => {
  let browserHistory;

  beforeEach(() => {
    browserHistory = new BrowserHistory("leetcode.com");
  });

  test("should visit and navigate back and forward correctly", () => {
    browserHistory.visit("google.com");
    expect(browserHistory.back(1)).toBe("leetcode.com");
    expect(browserHistory.forward(1)).toBe("google.com");
    expect(browserHistory.back(1)).toBe("leetcode.com");
  });

  test("should handle multiple visits and navigation", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.visit("youtube.com");
    expect(browserHistory.back(1)).toBe("facebook.com");
    expect(browserHistory.back(1)).toBe("google.com");
    expect(browserHistory.forward(1)).toBe("facebook.com");
    browserHistory.visit("linkedin.com");

    browserHistory.print();

    expect(browserHistory.forward(2)).toBe("linkedin.com"); // Cannot move forward
    expect(browserHistory.back(2)).toBe("google.com");
    expect(browserHistory.back(7)).toBe("leetcode.com");
  });

  test("should clear forward history after visiting a new URL", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    expect(browserHistory.forward(1)).toBe("facebook.com"); // Cannot move forward after visiting a new URL
    browserHistory.visit("linkedin.com");
    expect(browserHistory.forward(1)).toBe("linkedin.com"); // Cannot move forward after visiting a new URL
  });

  test("should navigate through history as expected", () => {
    const browserHistory = new BrowserHistory("leetcode.com");

    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.visit("youtube.com");

    expect(browserHistory.back(1)).toBe("facebook.com");
    expect(browserHistory.back(1)).toBe("google.com");
    expect(browserHistory.forward(1)).toBe("facebook.com");

    browserHistory.visit("linkedin.com");

    expect(browserHistory.forward(2)).toBe("linkedin.com"); // Cannot move forward, set to last visited URL
    expect(browserHistory.back(2)).toBe("google.com");
    expect(browserHistory.back(7)).toBe("leetcode.com");
  });

  test("should handle backward and forward navigation as expected", () => {
    const browserHistory = new BrowserHistory("zav.com");

    browserHistory.visit("kni.com");

    expect(browserHistory.back(7)).toBe("zav.com"); // Cannot move back, stays at 'zav.com'
    expect(browserHistory.back(7)).toBe("zav.com"); // Cannot move back, stays at 'zav.com'

    expect(browserHistory.forward(5)).toBe("kni.com"); // Cannot move forward, stays at 'zav.com'
    expect(browserHistory.forward(1)).toBe("kni.com"); // Cannot move forward, stays at 'zav.com'

    browserHistory.visit("pwrrbnw.com");
    browserHistory.visit("mosohif.com");

    expect(browserHistory.back(9)).toBe("zav.com"); // Cannot move back, stays at 'zav.com'
  });

  test("should handle backward and forward navigation as expected", () => {
    const browserHistory = new BrowserHistory("leetcode.com");

    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.visit("youtube.com");

    expect(browserHistory.back(1)).toBe("facebook.com");
    expect(browserHistory.back(1)).toBe("google.com");
    expect(browserHistory.forward(1)).toBe("facebook.com");

    browserHistory.visit("linkedin.com");

    expect(browserHistory.forward(2)).toBe("linkedin.com"); // Cannot move forward, stays at 'linkedin.com'
    expect(browserHistory.back(2)).toBe("google.com");
    expect(browserHistory.back(7)).toBe("leetcode.com");
  });
});
