import { Message, Client } from "discord.js";
import { OPTIONS } from "../options";
import { getStandardCommands, StandardCommand } from "./standard-command";
import { isNameMatches, isAliasesMatches } from "./command-utils";

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
    const commands = getStandardCommands();
    const foundByName = commands.find(command => isNameMatches(command, commandName));
    return foundByName || commands.find(command => isAliasesMatches(command, commandName));
}
