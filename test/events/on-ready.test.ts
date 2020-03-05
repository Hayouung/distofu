import { onReady } from "../../src/events/on-ready";

describe("on-error event", () => {
  let consoleSpy: jasmine.Spy;

  beforeEach(() => {
    consoleSpy = spyOn(console, "log");
    onReady();
  });

  it("should log in console", () => {
    expect(consoleSpy).toHaveBeenCalledWith("ready!");
  });
});
