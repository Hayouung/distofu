import { whoa } from "./whoa";
import { Message, Client } from "discord.js";
import { CONFIG } from "../../../../config";

CONFIG.ownerId = "123";

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

  it("should match condition if message author is owner and has 'WHOA!!' in content", () => {
    expect(whoa.condition(message, {} as Client)).toBe(true);
  });

  it("should send 'whoa' to message channel on perform", () => {
    whoa.perform(message, {} as Client);
    expect(message.channel.send).toHaveBeenCalledWith("whoa");
  });
});
