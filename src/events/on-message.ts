import { Message, Client } from "discord.js";
import { CONFIG } from "../config";
import { handleStandardCommand } from "../commands/standard/standard-command";
import { handleCustomCommand } from "../commands/custom/custom-command";

export function onMessage(message: Message, client: Client): void {
    if (isStandardCommand(message)) {
        handleStandardCommand(message, client);
    } else {
        handleCustomCommand(message, client);
    }
}

function isStandardCommand(message: Message): boolean {
    const trimmed = message.content.trim();
    return trimmed.startsWith(CONFIG.prefix);
}
