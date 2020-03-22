import { handleStandardCommand, standardCommands, StandardCommand } from "./standard-command";
import { Message, Client } from "discord.js";

describe("standard command", () => {
  const testStandardCommand: StandardCommand = {
    name: "iamtest",
    perform: jest.fn() as any,
    aliases: ["testiam"]
  };
  jest.spyOn(standardCommands, "getCommands").mockReturnValue([testStandardCommand]);

  it("should find command by name and perform", () => {
    const message = {
      content: "--iamtest"
    } as Message;

    handleStandardCommand(message, {} as Client);
    expect(testStandardCommand.perform).toHaveBeenCalled();
  });

  it("should find command by alias and perform", () => {
    const message = {
      content: "--testiam"
    } as Message;

    handleStandardCommand(message, {} as Client);
    expect(testStandardCommand.perform).toHaveBeenCalled();
  });

  it("should not perform command if no command found", () => {
    const message = {
      content: "--asdf"
    } as Message;

    handleStandardCommand(message, {} as Client);
    expect(testStandardCommand.perform).not.toHaveBeenCalled();
  });
});
