import { handleCustomCommand, customCommands, CustomCommand } from "./custom-command";
import { Message, Client } from "discord.js";

describe("custom command", () => {
  const performSpy = jasmine.createSpy("iamtest.perform");
  const testCustomCommand: CustomCommand = {
    name: "iamtest",
    perform: performSpy,
    condition: (message: Message) => message.content === "test!"
  };

  beforeEach(() => {
    spyOn(customCommands, "getCommands").and.returnValue([testCustomCommand]);
  });

  afterEach(() => {
    performSpy.calls.reset();
  });

  it("should perform command if matching condition found", () => {
    const message = {
      content: "test!"
    } as Message;

    const client = {} as Client;
    handleCustomCommand(message, client);
    expect(performSpy).toHaveBeenCalled();
  });

  it("should not perform command if no matching condition found", () => {
    const message = {
      content: "test?"
    } as Message;

    const client = {} as Client;
    handleCustomCommand(message, client);
    expect(performSpy).not.toHaveBeenCalled();
  });
});
