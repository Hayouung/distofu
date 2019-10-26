import { Message, Client } from "discord.js";
import { getCustomCommands } from "./custom-command";

export function customCommandHandler(message: Message, client: Client): void {
    const found = getCustomCommands().find(command => command.condition(message, client));

    if (found) {
        found.perform(message, client);
    }
}
