import { Message, Client } from "discord.js";
import { hello } from "./standard/general/hello";

export interface StandardCommand {
	name: string;
	aliases?: string[];
	perform(message: Message, client: Client): void;
}

export const STANDARD_COMMANDS: StandardCommand[] = [
	hello
];