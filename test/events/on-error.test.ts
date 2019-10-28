import { onError } from "../../src/events/on-error";

describe("on-error event", () => {
    let consoleSpy: jasmine.Spy;

    beforeEach(() => {
        consoleSpy = spyOn(console, "error");
        onError(new Error("message"));
    });

    it("should log error in console", () => {
        expect(consoleSpy).toHaveBeenCalledWith("Error message");
    });
});
