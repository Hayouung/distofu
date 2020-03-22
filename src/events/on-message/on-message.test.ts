import { onMessage } from "./on-message";
import { Message, Client } from "discord.js";
import * as customCommand from "../../commands/custom/custom-command";
import * as standardCommand from "../../commands/standard/standard-command";

jest.mock("../../commands/custom/custom-command");
jest.mock("../../commands/standard/standard-command");

describe("on-message event", () => {
  it("should call standard command handler if message starts with prefix", () => {
    onMessage({ content: "--hello test" } as Message, {} as Client);
    expect(standardCommand.handleStandardCommand).toHaveBeenCalled();
    expect(customCommand.handleCustomCommand).not.toHaveBeenCalled();
  });

  it("should call custom command handler if message doesn't start with prefix", () => {
    onMessage({ content: "hello test" } as Message, {} as Client);
    expect(standardCommand.handleStandardCommand).not.toHaveBeenCalled();
    expect(customCommand.handleCustomCommand).toHaveBeenCalled();
  });
});
