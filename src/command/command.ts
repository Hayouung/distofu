import { Message } from "discord.js";
import { TofuClient } from "../client";

export interface Command {
  execute(message: Message, client: TofuClient): void;
}

export function handleCommand(message: Message, client: TofuClient): void {
  const name = extractCommandName(message, client);
  const found = client.commands.get(name) ?? checkAliases(name, client);
  if (found) {
    found.execute(message, client);
  } else {
    client.noMatchingCommandHandler?.(message, client);
  }
}

function extractCommandName(message: Message, { tofuConfig }: TofuClient): string {
  return message.content
    .trim()
    .toLowerCase()
    .slice(tofuConfig.prefix.length)
    .split(" ")[0];
}

function checkAliases(name: string, { commands, aliases }: TofuClient) {
  const alias = aliases.get(name);
  return alias ? commands.get(alias) : undefined;
}
