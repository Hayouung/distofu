import { StandardCommand } from "../../standard-command";
import { Client, Message } from "discord.js";

export const hello: StandardCommand = {
	name: "hello",
	perform(message: Message, client: Client) {
		message.channel.send("hello");
	}
};
