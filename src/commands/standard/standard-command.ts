import { Message, Client } from "discord.js";
import { hello } from "./general/hello";
import { Commands } from "../commands";
import { OPTIONS } from "../../options";

/**
 * Interface for all standard commands to extend/have properties of.
 */
export interface StandardCommand {
    name: string;
    aliases?: string[];
    perform(message: Message, client: Client): void;
}

export const standardCommands = new Commands<StandardCommand>([hello]);

export function handleStandardCommand(message: Message, client: Client): void {
    const found = findCommand(extractCommandName(message));
    if (found) {
        found.perform(message, client);
    }
}

function extractCommandName(message: Message): string {
    return message.content
        .trim()
        .toLowerCase()
        .substring(OPTIONS.prefix.length)
        .split(" ")[0];
}

function findCommand(commandName: string): StandardCommand | undefined {
    const commands = standardCommands.getCommands();
    const foundByName = commands.find(command => command.name === commandName);
    return foundByName || commands.find(command => isAliasesMatches(command, commandName));
}

function isAliasesMatches(command: StandardCommand, commandName: string): boolean {
    return (command.aliases || []).includes(commandName);
}
