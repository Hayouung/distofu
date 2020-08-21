import { Client, Message, ClientOptions } from "discord.js";
import { onMessage, onError, onReady } from "./events";
import { TofuConfig } from "./config";
import { Command, NoMatchingCommandHandler } from "./command/command";
import { Trigger } from "./trigger/trigger";

export class TofuClient extends Client {
  /**
   * Config to control certain behaviour.
   */
  readonly tofuConfig: TofuConfig;

  /**
   * Map of commands that are triggered with a prefix.
   */
  readonly commands = new Map<string, Command>();

  /**
   * Map of aliases for commands.
   */
  readonly aliases = new Map<string, string>();

  /**
   * Map of triggers that are executed when a condition is met.
   */
  readonly triggers = new Map<string, Trigger>();

  /**
   * Optional function that is called when no matching command is found.
   */
  noMatchingCommandHandler?: NoMatchingCommandHandler;

  constructor(tofuConfig: TofuConfig, options?: ClientOptions) {
    super(options);
    this.tofuConfig = tofuConfig;

    this.on("message", (message: Message) => onMessage(message, this));
    this.on("ready", () => onReady());
    this.on("error", error => onError(error));
  }

  /**
   * Registers a function to be called when no matching command is found.
   * Can remove handler by calling this with undefined.
   * @param handler function to register or undefined to remove handler.
   */
  registerNoMatchingCommandHandler(handler: NoMatchingCommandHandler) {
    this.noMatchingCommandHandler = handler;
  }
}
