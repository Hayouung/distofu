export class Commands<T extends Command> {
    private readonly commands: T[];

    /**
     * Creates new instance of Commands with supplied commands array
     * or an empty array if none supplied.
     * @param initCommands the supplied commands array
     */
    constructor(initCommands?: T[]) {
        this.commands = initCommands || [];
    }

    /**
     * Gets a copy of the implemented commands array.
     * @returns the copied commands - mutating this will not affect implemented commands
     */
    getCommands(): T[] {
        return [...this.commands];
    }

    /**
     * Adds a command to the implemented commands array.
     * Command name must be unique.
     * @param command the command to add
     * @returns true if added, false otherwise
     */
    addCommand(command: T): boolean {
        if (isUnique(this.commands, command)) {
            this.commands.push(command);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Deletes an implemented command by name.
     * @param name name of the command to delete
     * @returns true if deleted, false otherwise
     */
    deleteCommand(name: string): boolean {
        const found = this.commands.findIndex(command => command.name === name);
        if (found > -1) {
            this.commands.splice(found, 1);
            return true;
        } else {
            return false;
        }
    }
}

function isUnique(commands: Command[], commandToAdd: Command): boolean {
    return !commands.some(command => command.name === commandToAdd.name);
}

interface Command {
    name: string;
}
