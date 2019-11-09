import { StandardCommand } from "../standard-command";
import { Message } from "discord.js";

const name = "hello";

function perform(message: Message): void {
    message.channel.send("hello");
}

export const hello: StandardCommand = {
    name,
    perform
};
