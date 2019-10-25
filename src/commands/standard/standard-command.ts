import { Message, Client } from "discord.js";
import { hello } from "./general/hello";
import { isNameMatches } from "../command-utils";

const STANDARD_COMMANDS: StandardCommand[] = [hello];

/**
 * Interface for all standard commands to extend/have properties of.
 */
export interface StandardCommand {
    name: string;
    aliases?: string[];
    perform(message: Message, client: Client): void;
}

/**
 * Gets a copy of the implemented standard commands array.
 * @returns the copied standard commands - mutating this will not affect implemented array
 */
export function getStandardCommands(): StandardCommand[] {
    return [...STANDARD_COMMANDS];
}

/**
 * Adds a standard command to the implemented standard commands array.
 * Command name must be unique to not clash with other commands on invocation
 * but can be the same as the aliases of other commands as the command handler
 * will search for a matching name first then matching aliases.
 * @param command the command to add
 * @returns true if added, false otherwise
 */
export function addStandardCommand(command: StandardCommand): boolean {
    try {
        assertCommand(command);
        STANDARD_COMMANDS.push(command);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

/**
 * Deletes an implemented standard command by name.
 * @param name name of the command to delete
 * @returns true if deleted, false otherwise
 */
export function deleteStandardCommand(name: string): boolean {
    const found = STANDARD_COMMANDS.findIndex(command => command.name === name);
    if (found > -1) {
        STANDARD_COMMANDS.splice(found, 1);
        return true;
    } else {
        return false;
    }
}

function assertCommand(commandToAdd: StandardCommand): void {
    if (commandToAdd == null) {
        throw new Error("command cannot be null or undefined");
    }

    if (typeof commandToAdd !== "object") {
        throw new Error("command must be an object");
    }

    const { name, perform, aliases } = commandToAdd;

    if (typeof name !== "string") {
        throw new Error("name must be a string");
    }

    if (typeof perform !== "function") {
        throw new Error("perform must be a function");
    }

    if (aliases && !Array.isArray(aliases)) {
        throw new Error("aliases must be an array");
    }

    if (getStandardCommands().some(command => isNameMatches(command, name))) {
        throw new Error(`command <${name}> already exists`);
    }
}
