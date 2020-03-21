import { CustomCommand } from "../../custom-command";
import { CONFIG } from "../../../../config";

export const whoa: CustomCommand = {
  name: "whoa",
  condition: message => message.author.id === CONFIG.ownerId && message.content.includes("WHOA!!"),
  perform: message => message.channel.send("whoa")
};
