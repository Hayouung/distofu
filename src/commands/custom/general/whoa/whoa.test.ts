import { whoa } from "./whoa";
import { Message } from "discord.js";
import { CONFIG } from "../../../../config";

describe("custom command whoa", () => {
  const sendSpy = jasmine.createSpy("message.channel.send");
  const message = {
    content: "WHOA!!",
    author: {
      id: "123"
    },
    channel: {
      send: (message: string) => sendSpy(message)
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
    expect(sendSpy).toHaveBeenCalledWith("whoa");
  });
});
