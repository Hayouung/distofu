import { Message, Client } from "discord.js";
import { customCommands } from "./custom-command";

export function customCommandHandler(message: Message, client: Client): void {
    const found = customCommands.getCommands().find(command => command.condition(message, client));

    if (found) {
        found.perform(message, client);
    }
}
