import { Message, Client } from "discord.js";
import { whoa } from "./general/whoa";

/**
 * Interface for all custom commands to extend/have properties of.
 */
export interface CustomCommand {
    perform(message: Message, client: Client): void;
    condition(message: Message, client: Client): boolean;
}

export const CUSTOM_COMMANDS: CustomCommand[] = [whoa];
