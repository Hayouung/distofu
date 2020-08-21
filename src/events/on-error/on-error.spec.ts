import { onError } from "./on-error";

describe("on-error event", () => {
  console.error = jest.fn();

  it("should log error in console", () => {
    const err = new Error("message");
    onError(err);

    expect(console.error).toBeCalledWith(err);
  });
});
