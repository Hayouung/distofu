import { StandardCommand } from "../standard-command";
import { Message } from "discord.js";
import { addEntry } from "../../../dao/raffle.dao";

const name = "raffle";

function perform(message: Message): void {
    addEntry({
        number: generateRandomNumber(),
        serverId: message.guild.id,
        userId: message.author.id
    });
}

export const raffle: StandardCommand = {
    name,
    perform
};

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100000);
}
