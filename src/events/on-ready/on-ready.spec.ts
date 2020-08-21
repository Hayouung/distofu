import { onReady } from "./on-ready";

describe("on-error event", () => {
  console.log = jest.fn();

  it("should log in console", () => {
    onReady();

    expect(console.log).toHaveBeenCalledWith("ready!");
  });
});
