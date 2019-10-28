import { StandardCommand } from "./standard/standard-command";
import { CustomCommand } from "./custom/custom-command";

export function isNameMatches(command: StandardCommand | CustomCommand, commandName: string): boolean {
    return command.name === commandName;
}

export function isAliasesMatches(command: StandardCommand, commandName: string): boolean {
    return (command.aliases || []).includes(commandName);
}
