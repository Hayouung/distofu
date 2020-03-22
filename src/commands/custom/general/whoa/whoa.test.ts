import { whoa } from "./whoa";
import { Message } from "discord.js";
import { CONFIG } from "../../../../config";

describe("custom command whoa", () => {
  const message = {
    content: "WHOA!!",
    author: {
      id: "123"
    },
    channel: {
      send: jest.fn() as any
    }
  } as Message;

  beforeEach(() => {
    CONFIG.ownerId = "123";
  });

  it("should match condition if message author is owner and has 'WHOA!!' in content", () => {
    expect(whoa.condition(message, {} as any)).toBe(true);
  });

  it("should send 'whoa' to message channel on perform", () => {
    whoa.perform(message, {} as any);
    expect(message.channel.send).toHaveBeenCalledWith("whoa");
  });
});
