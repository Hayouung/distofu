import { CustomCommand } from "../custom-command";
import { Message } from "discord.js";

export const whoa: CustomCommand = {
    name: "whoa",
    condition(message: Message): boolean {
        return message.author.id === "116769115628109828";
    },
    perform(message: Message): void {
        message.channel.send("whoa");
    }
};
