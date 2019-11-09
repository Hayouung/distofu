import { CustomCommand } from "../custom-command";
import { Message } from "discord.js";

const name = "whoa";

function condition(message: Message): boolean {
    return message.author.id === "116769115628109828" && message.content.includes("WHOA!!");
}

function perform(message: Message): void {
    message.channel.send("whoa");
}

export const whoa: CustomCommand = {
    name,
    condition,
    perform
};
