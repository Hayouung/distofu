type Command = {
    name: string;
};

export class Commands<T extends Command> {
    private readonly COMMANDS: T[];

    constructor(initCommands: T[]) {
        this.COMMANDS = initCommands;
    }

    /**
     * Gets a copy of the implemented commands array.
     * @returns the copied commands - mutating this will not affect implemented commands
     */
    getCommands(): T[] {
        return [...this.COMMANDS];
    }

    /**
     * Adds a command to the implemented commands array.
     * Command name must be unique.
     * @param command the command to add
     * @returns true if added, false otherwise
     */
    addCommand(command: T): boolean {
        try {
            assertUnique(this.COMMANDS, command);
            this.COMMANDS.push(command);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Deletes an implemented command by name.
     * @param name name of the command to delete
     * @returns true if deleted, false otherwise
     */
    deleteCommand(name: string): boolean {
        const found = this.COMMANDS.findIndex(command => command.name === name);
        if (found > -1) {
            this.COMMANDS.splice(found, 1);
            return true;
        } else {
            return false;
        }
    }
}

function assertUnique(commands: Command[], commandToAdd: Command): void {
    if (commands.some(command => command.name === commandToAdd.name)) {
        throw new Error(`command <${name}> already exists`);
    }
}
