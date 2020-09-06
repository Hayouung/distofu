import { handleTrigger, Trigger } from "./trigger";
import { Message } from "discord.js";
import { TofuClient } from "../client";

describe("trigger", () => {
  const execute = jest.fn();
  const anotherExecute = jest.fn();
  const client = {
    triggers: new Map<string, Trigger>([
      ["iamtest", { execute, condition: (message: Message) => message.content === "test!" }],
      ["iamanothertestwithsamecondition", { execute: anotherExecute, condition: (message: Message) => message.content === "test!" }]
    ]),
    tofuConfig: {}
  } as TofuClient;

  it("should execute trigger if matching condition found", () => {
    const message = { content: "test!" } as Message;
    handleTrigger(message, client);

    expect(execute).toHaveBeenCalled();
    expect(anotherExecute).not.toHaveBeenCalled();
  });

  it("should execute all triggers with matching condition if config for enabled", () => {
    const message = { content: "test!" } as Message;
    handleTrigger(message, { ...client, tofuConfig: { executeAllMatchedTriggers: true } } as TofuClient);

    expect(execute).toHaveBeenCalled();
    expect(anotherExecute).toHaveBeenCalled();
  });

  it("should not execute trigger if no matching condition found", () => {
    const message = { content: "test?" } as Message;
    handleTrigger(message, client);

    expect(execute).not.toHaveBeenCalled();
    expect(anotherExecute).not.toHaveBeenCalled();
  });
});
