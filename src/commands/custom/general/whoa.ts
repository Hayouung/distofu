import { CustomCommand } from "../custom-command";
import { Message } from "discord.js";
import { CONFIG } from "../../../config";

const name = "whoa";

function condition(message: Message): boolean {
    return message.author.id === CONFIG.ownerId && message.content.includes("WHOA!!");
}

function perform(message: Message): void {
    message.channel.send("whoa");
}

export const whoa: CustomCommand = {
    name,
    condition,
    perform
};
