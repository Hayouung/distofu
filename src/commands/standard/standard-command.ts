import { Message, Client } from "discord.js";
import { hello } from "./general/hello";
import { Commands } from "../commands";

/**
 * Interface for all standard commands to extend/have properties of.
 */
export interface StandardCommand {
    name: string;
    aliases?: string[];
    perform(message: Message, client: Client): void;
}

export const standardCommands = new Commands<StandardCommand>([hello]);
