import { onReady } from "./on-ready";

describe("on-error event", () => {
  it("should log in console", () => {
    console.log = jest.fn();
    onReady();
    expect(console.log).toHaveBeenCalledWith("ready!");
  });
});
