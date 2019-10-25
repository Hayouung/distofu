import { Message, Client } from "discord.js";
import { whoa } from "./general/whoa";
import { isNameMatches } from "../command-utils";
import { assertNotNull, assertType } from "../../asserts";

/**
 * Interface for all custom commands to extend/have properties of.
 */
export interface CustomCommand {
    name: string;
    perform(message: Message, client: Client): void;
    condition(message: Message, client: Client): boolean;
}

const CUSTOM_COMMANDS: CustomCommand[] = [whoa];

/**
 * Gets a copy of the implemented custom commands array.
 * @returns the copied custom commands - mutating this will not affect implemented array
 */
export function getCustomCommands(): CustomCommand[] {
    return [...CUSTOM_COMMANDS];
}

/**
 * Adds a custom command to the implemented custom commands array.
 * Command name must be unique.
 * @param command the command to add
 * @returns true if added, false otherwise
 */
export function addCustomCommand(command: CustomCommand): boolean {
    try {
        assertCustomCommand(command);
        CUSTOM_COMMANDS.push(command);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

/**
 * Deletes an implemented custom command by name.
 * @param name name of the command to delete
 * @returns true if deleted, false otherwise
 */
export function deleteCustomCommand(name: string): boolean {
    const found = CUSTOM_COMMANDS.findIndex(command => command.name === name);
    if (found > -1) {
        CUSTOM_COMMANDS.splice(found, 1);
        return true;
    } else {
        return false;
    }
}

function assertCustomCommand(commandToAdd: CustomCommand): void {
    assertNotNull(commandToAdd, "command cannot be null or undefined");
    assertType(commandToAdd, "object", "command must be an object");

    const { name, perform, condition } = commandToAdd;

    assertType(name, "string", "name must be a string");
    assertType(perform, "function", "perform must be a function");
    assertType(condition, "function", "condition must be a function");

    if (getCustomCommands().some(command => isNameMatches(command, name))) {
        throw new Error(`custom command <${name}> already exists`);
    }
}
