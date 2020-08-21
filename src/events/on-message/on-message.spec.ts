import { onMessage } from "./on-message";
import { Message } from "discord.js";
import { handleCommand } from "../../command/command";
import { handleTrigger } from "../../trigger/trigger";
import { TofuClient } from "../../client";

jest.mock("../../command/command");
jest.mock("../../trigger/trigger");

describe("on-message event", () => {
  it("should call standard command handler if message starts with prefix", () => {
    onMessage({ content: "--hello test" } as Message, { tofuConfig: { prefix: "--" } } as TofuClient);

    expect(handleCommand).toHaveBeenCalled();
    expect(handleTrigger).not.toHaveBeenCalled();
  });

  it("should call custom command handler if message doesn't start with prefix", () => {
    onMessage({ content: "hello test" } as Message, { tofuConfig: { prefix: "--" } } as TofuClient);

    expect(handleCommand).not.toHaveBeenCalled();
    expect(handleTrigger).toHaveBeenCalled();
  });
});
