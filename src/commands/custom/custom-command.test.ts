import { handleCustomCommand, customCommands, CustomCommand } from "./custom-command";
import { Message, Client } from "discord.js";

describe("custom command", () => {
  const testCustomCommand: CustomCommand = {
    name: "iamtest",
    perform: jest.fn() as any,
    condition: (message: Message) => message.content === "test!"
  };
  jest.spyOn(customCommands, "getCommands").mockReturnValue([testCustomCommand]);

  it("should perform command if matching condition found", () => {
    const message = {
      content: "test!"
    } as Message;
    handleCustomCommand(message, {} as Client);

    expect(testCustomCommand.perform).toHaveBeenCalled();
  });

  it("should not perform command if no matching condition found", () => {
    const message = {
      content: "test?"
    } as Message;
    handleCustomCommand(message, {} as Client);

    expect(testCustomCommand.perform).not.toHaveBeenCalled();
  });
});
