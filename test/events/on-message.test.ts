import { onMessage } from "../../src/events/on-message";
import * as stdCmdHandlerObj from "../../src/commands/standard/standard-command-handler";
import * as customCmdHandlerObj from "../../src/commands/custom/custom-command-handler";
import { Message, Client } from "discord.js";

describe("on-message event", () => {
    let stdCmdHandlerSpy: jasmine.Spy;
    let customCmdHandlerSpy: jasmine.Spy;

    beforeEach(() => {
        stdCmdHandlerSpy = spyOn(stdCmdHandlerObj, "standardCommandHandler");
        customCmdHandlerSpy = spyOn(customCmdHandlerObj, "customCommandHandler");
    });

    it("should call standard command handler if message starts with prefix", () => {
        onMessage({ content: "--hello test" } as Message, {} as Client);
        expect(stdCmdHandlerSpy).toHaveBeenCalled();
        expect(customCmdHandlerSpy).not.toHaveBeenCalled();
    });

    it("should call custom command handler if message doesn't start with prefix", () => {
        onMessage({ content: "hello test" } as Message, {} as Client);
        expect(stdCmdHandlerSpy).not.toHaveBeenCalled();
        expect(customCmdHandlerSpy).toHaveBeenCalled();
    });
});
