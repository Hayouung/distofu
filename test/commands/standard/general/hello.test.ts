import { hello } from "../../../../src/commands/standard/general/hello";
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
    hello.perform(message);
    expect(sendSpy).toHaveBeenCalledWith("hello");
  });
});
