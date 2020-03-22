import { hello } from "./hello";
import { Message, Client } from "discord.js";

describe("standard command hello", () => {
  const message = {
    channel: {
      send: jest.fn() as any
    }
  } as Message;

  it("should perform", () => {
    hello.perform(message, {} as Client);
    expect(message.channel.send).toHaveBeenCalledWith("hello");
  });
});
