import { hello } from "./hello";
import { Message } from "discord.js";

describe("standard command hello", () => {
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

  it("should perform", () => {
    hello.perform(message, {} as any);
    expect(sendSpy).toHaveBeenCalledWith("hello");
  });
});
