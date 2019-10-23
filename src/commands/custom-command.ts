import { Message, Client } from "discord.js";
import { whoa } from "./custom/whoa";

export interface CustomCommand {
	perform(message: Message, client: Client): void;
	condition(message: Message, client: Client): boolean;
}

export const CUSTOM_COMMANDS: CustomCommand[] = [
	whoa
];