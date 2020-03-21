import { StandardCommand } from "../../standard-command";
import { Message } from "discord.js";

export const avatar: StandardCommand = {
  name: "avatar",
  perform: (message: Message) => {
    message.channel.send(message.author.avatarURL());
  }
};
