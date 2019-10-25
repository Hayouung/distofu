import { Message, Client } from "discord.js";
import { hello } from "./standard/general/hello";

const STANDARD_COMMANDS: StandardCommand[] = [hello];

export interface StandardCommand {
    name: string;
    aliases?: string[];
    perform(message: Message, client: Client): void;
}

/**
 * Gets a copy of implemented standard commands.
 * Mutating this will not affect implemented standard commands.
 * @returns the copied standard commands
 */
export function getStandardCommands(): StandardCommand[] {
    return [...STANDARD_COMMANDS];
}

/**
 * Adds a standard command to implemented standard commands.
 * @param command the command to add
 */
export function addStandardCommand(command: StandardCommand): void {
    assertCommand(command);
    STANDARD_COMMANDS.push(command);
}

/**
 * Deletes an implemented standard command by name.
 * @param name name of the command to delete
 */
export function deleteStandardCommand(name: string): void {
    const found = STANDARD_COMMANDS.findIndex(command => command.name === name);
    if (found > -1) {
        STANDARD_COMMANDS.splice(found, 1);
    }
}

function assertCommand(command: StandardCommand): void {
    if (!command) {
        throw new Error("command cannot be falsy");
    }

    const { name, perform, aliases } = command;

    if (typeof name !== "string") {
        throw new Error("name must be a string");
    }

    if (typeof perform !== "function") {
        throw new Error("perform must be a function");
    }

    if (aliases && !Array.isArray(aliases)) {
        throw new Error("aliases must be an array");
    }
}
