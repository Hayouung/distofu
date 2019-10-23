import { CustomCommand } from "../custom-command";
import { Message, Client } from "discord.js";

export const whoa: CustomCommand = {
	condition(message: Message, client: Client): boolean {
		return message.author.id === "116769115628109828";
	},

	perform(message: Message, client: Client): void {
		message.channel.send("whoa");
	}
};