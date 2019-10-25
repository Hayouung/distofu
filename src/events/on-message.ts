import { Message, Client } from "discord.js";
import { OPTIONS } from "../consts";
import { standardCommandHandler } from "../commands/standard-command-handler";
import { customCommandHandler } from "../commands/custom-command-handler";

export function onMessage(message: Message, client: Client): void {
    if (isStandardCommand(message)) {
        standardCommandHandler(message, client);
    } else {
        customCommandHandler(message, client);
    }
}

function isStandardCommand(message: Message): boolean {
    const trimmed = message.content.trim();
    return trimmed.indexOf(OPTIONS.prefix) === 0;
}
