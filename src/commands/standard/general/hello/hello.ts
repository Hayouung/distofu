import { StandardCommand } from "../../standard-command";
import { Message } from "discord.js";

export const hello: StandardCommand = {
  name: "hello",
  perform: (message: Message) => {
    message.channel.send("hello");
  }
};
