import { greet } from "../app";

describe("App", () => {
  it("should return a greeting message", () => {
    const result = greet("World");
    expect(result).toEqual("Hello, World!");
  });
}); 