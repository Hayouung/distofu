import { handleCommand, Command } from "./command";
import { Message } from "discord.js";
import { TofuClient } from "../client";

describe("command", () => {
  const execute = jest.fn();
  const noMatchingCommandHandler = jest.fn();

  const client = {
    commands: new Map<string, Command>([
      ["iamtest", { execute }]
    ]),
    aliases: new Map<string, string>([
      ["testiam", "iamtest"]
    ]),
    tofuConfig: { prefix: "--" }
  } as TofuClient;

  it("should find command by name and execute", () => {
    const message = { content: "--iamtest" } as Message;
    handleCommand(message, client);

    expect(execute).toHaveBeenCalled();
  });

  it("should find command by alias and execute", () => {
    const message = { content: "--testiam" } as Message;
    handleCommand(message, client);

    expect(execute).toHaveBeenCalled();
  });

  it("should not execute command if no match and not call noMatchingCommandHandler", () => {
    const message = { content: "--asdf" } as Message;
    handleCommand(message, client);

    expect(execute).not.toHaveBeenCalled();
    expect(noMatchingCommandHandler).not.toHaveBeenCalled();
  });

  it("should not execute command if no match and call noMatchingCommandHandler", () => {
    const message = { content: "--asdf" } as Message;
    handleCommand(message, { ...client, noMatchingCommandHandler } as any);

    expect(execute).not.toHaveBeenCalled();
    expect(noMatchingCommandHandler).toHaveBeenCalled();
  });
});
