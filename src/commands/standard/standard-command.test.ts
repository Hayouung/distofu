import { handleStandardCommand, standardCommands, StandardCommand } from "./standard-command";
import { Message, Client } from "discord.js";

describe("standard command", () => {
  const performSpy = jasmine.createSpy("iamtest.perform");
  const testStandardCommand: StandardCommand = {
    name: "iamtest",
    perform: performSpy,
    aliases: ["testiam"]
  };

  beforeEach(() => {
    spyOn(standardCommands, "getCommands").and.returnValue([testStandardCommand]);
  });

  afterEach(() => {
    performSpy.calls.reset();
  });

  it("should find command by name and perform", () => {
    const message = {
      content: "--iamtest"
    } as Message;

    const client = {} as Client;
    handleStandardCommand(message, client);
    expect(performSpy).toHaveBeenCalled();
  });

  it("should find command by alias and perform", () => {
    const message = {
      content: "--testiam"
    } as Message;

    const client = {} as Client;
    handleStandardCommand(message, client);
    expect(performSpy).toHaveBeenCalled();
  });

  it("should not perform command if no command found", () => {
    const message = {
      content: "--asdf"
    } as Message;

    const client = {} as Client;
    handleStandardCommand(message, client);
    expect(performSpy).not.toHaveBeenCalled();
  });
});
