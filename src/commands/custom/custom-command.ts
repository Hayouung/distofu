import { Message, Client } from "discord.js";
import { Commands } from "../commands";
import { GENERAL_CUSTOM_COMMANDS } from "./general/general";

/**
 * Interface for all custom commands to extend/have properties of.
 */
export interface CustomCommand {
  name: string;
  perform(message: Message, client: Client): void;
  condition(message: Message, client: Client): boolean;
}

export const customCommands = new Commands<CustomCommand>(GENERAL_CUSTOM_COMMANDS);

export function handleCustomCommand(message: Message, client: Client): void {
  const found = customCommands.getCommands().find(command => command.condition(message, client));

  if (found) {
    found.perform(message, client);
  }
}
