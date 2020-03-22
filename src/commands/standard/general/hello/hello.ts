import { StandardCommand } from "../../standard-command";

export const hello: StandardCommand = {
  name: "hello",
  perform: message => message.channel.send("hello")
};
