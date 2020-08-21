import { Message } from "discord.js";
import { TofuClient } from "../client";

export interface Trigger {
  execute(message: Message, client: TofuClient): void;
  condition(message: Message, client: TofuClient): boolean;
}

export function handleTrigger(message: Message, client: TofuClient): void {
  for (const command of client.triggers.values()) {
    if (command.condition(message, client)) {
      command.execute(message, client);
      if (!client.tofuConfig.executeMatchedTriggers) {
        break;
      }
    }
  }
}
