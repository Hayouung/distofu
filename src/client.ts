import { Client, Message } from "discord.js";
import { onMessage } from "./events/on-message/on-message";
import { onReady } from "./events/on-ready/on-ready";
import { onError } from "./events/on-error/on-error";

/**
 * The discord.js client object.
 */
export const client = new Client();

client.on("message", (message: Message) => onMessage(message, client));
client.on("ready", () => onReady());
client.on("error", error => onError(error));
