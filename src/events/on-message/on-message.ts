import { Message } from "discord.js";
import { handleCommand } from "../../command/command";
import { handleTrigger } from "../../trigger/trigger";
import { TofuClient } from "../../client";

export function onMessage(message: Message, client: TofuClient): void {
  if (isCommand(message, client)) {
    handleCommand(message, client);
  } else {
    handleTrigger(message, client);
  }
}

function isCommand(message: Message, { tofuConfig }: TofuClient): boolean {
  return message.content
    .trim()
    .startsWith(tofuConfig.prefix);
}
