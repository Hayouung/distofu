# distofu

distofu attempts to make getting started with Discord bot development simpler by abstracting message events into commands and triggers. Nothing too grand. Based on discord.js.

## Getting Started

Import and create a new `TofuClient` with a `TofuConfig` object as the first constructor parameter. You can pass in the `ClientOptions` object from discord.js as the second parameter if you need to.

```typescript
import { TofuClient } from "distofu";

const client = new TofuClient({
  prefix: "!"
});
```

Now you can add commands to make your bot respond to prefixed messages.

Commands are objects with an `execute` function that is called when a message starts with the prefix and followed up with the command's name.

Let's add a command that makes the bot respond with "hello friend" when someone says "!hello" in a channel the bot can read.

```typescript
// "hello" here is the command name to match after the prefix
client.commands.set("hello", {
  execute: message => message.channel.send("hello friend") // the function to execute when command name is matched
});
```

We clearly need more than one way to say hello to the bot so let's now add aliases for the "!hello" command we just created.

```typescript
client.aliases.set("hi", "hello");
client.aliases.set("yo", "hello");
```

Now the bot will respond to both "!hi" and "!yo" with "hello friend" by executing the "!hello" command!

You can also add a trigger to make your bot complain when someone says pineapple doesn't belong on pizza.

Triggers are functions that are called when a message matches the trigger's condition which can be pretty much anything.

```typescript
// the name of the trigger isn't too important as long as it's unique. it only serves a purpose for deleting
client.triggers.set("pineapple is not bad on pizza", {
  condition: message => message.content.includes("pineapple pizza bad"), // condition the message much match
  execute: message => message.channel.send("how dare")
});
```

Once you have done all that, you can login using your Discord bot token (it is entirely possible to add commands, aliases, and triggers after logging in too!).

```typescript
client.login("YOUR_DISCORD_TOKEN");
```

The bot is ready and listening for commands/triggers when you see "ready!" printed in your console.

## Possible things to do
- conditions and disable/enable for commands
- support async commands and triggers
- rich embeds for stylish bot messages
- abstract other events? e.g. reactions, member leave, member join
- util functions?
