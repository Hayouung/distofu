import { Message, Client } from "discord.js";
import { OPTIONS } from "../../options";
import { standardCommands, StandardCommand } from "./standard-command";

export function standardCommandHandler(message: Message, client: Client): void {
    const found = findCommand(extractCommandName(message));
    if (found) {
        found.perform(message, client);
    }
}

function extractCommandName(message: Message): string {
    const content = message.content
        .trim()
        .toLowerCase()
        .substring(OPTIONS.prefix.length);
    return content.split(" ")[0];
}

function findCommand(commandName: string): StandardCommand | undefined {
    const commands = standardCommands.getCommands();
    const foundByName = commands.find(command => command.name === commandName);
    return foundByName || commands.find(command => isAliasesMatches(command, commandName));
}

function isAliasesMatches(command: StandardCommand, commandName: string): boolean {
    return (command.aliases || []).includes(commandName);
}
