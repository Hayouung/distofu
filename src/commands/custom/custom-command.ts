import { Message, Client } from "discord.js";
import { whoa } from "./general/whoa";
import { Commands } from "../commands";

/**
 * Interface for all custom commands to extend/have properties of.
 */
export interface CustomCommand {
    name: string;
    perform(message: Message, client: Client): void;
    condition(message: Message, client: Client): boolean;
}

export const customCommands = new Commands<CustomCommand>([whoa]);
