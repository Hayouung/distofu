import { StandardCommand } from "./standard-command";

export function isNameMatches(command: StandardCommand, commandName: string): boolean {
    return command.name === commandName;
}

export function isAliasesMatches(command: StandardCommand, commandName: string): boolean {
    return (command.aliases || []).includes(commandName);
}
