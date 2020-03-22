import { onError } from "./on-error";

describe("on-error event", () => {
  it("should log error in console", () => {
    console.error = jest.fn();
    onError(new Error("message"));
    expect(console.error).toBeCalledWith("Error message");
  });
});
