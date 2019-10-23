import { Message, Client } from "discord.js";
import { OPTIONS } from "../consts";
import { STANDARD_COMMANDS, StandardCommand } from "./standard-command";

export function standardCommandHandler(message: Message, client: Client): void {
	const found = findCommand(extractCommandName(message));
	if (found) {
		found.perform(message, client);
	}
}

function extractCommandName(message: Message): string {
	const content = message.content.trim().toLowerCase().substring(OPTIONS.prefix.length);
	return content.split(" ")[0];
}

function findCommand(commandName: string): StandardCommand | undefined {
	return STANDARD_COMMANDS.find(command => matchesCommand(command, commandName));
}

function matchesCommand(command: StandardCommand, commandName: string): boolean {
	return command.name === commandName || (command.aliases || []).includes(commandName);
}