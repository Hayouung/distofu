import { StandardCommand } from "../../standard-command";

export const avatar: StandardCommand = {
  name: "avatar",
  perform: message => message.channel.send(message.author.avatar)
};
