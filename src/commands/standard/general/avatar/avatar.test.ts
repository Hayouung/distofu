import { avatar } from "./avatar";
import { Message, Client } from "discord.js";

describe("standard command avatar", () => {
  const message = {
    channel: {
      send: jest.fn() as any
    },
    author: {
      avatar: "avatar"
    }
  } as Message;

  it("should perform", () => {
    avatar.perform(message, {} as Client);
    expect(message.channel.send).toHaveBeenCalledWith("avatar");
  });
});
