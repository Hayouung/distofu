import { Message, Client } from "discord.js";
import { CUSTOM_COMMANDS } from "./custom-command";

export function customCommandHandler(message: Message, client: Client): void {
	const found = CUSTOM_COMMANDS.find(command => command.condition(message, client));
	if (found) {
		found.perform(message, client);
	}
}