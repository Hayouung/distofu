import { Commands } from "../../src/commands/commands";

describe("Commands class", () => {
  const initCommand = { name: "hi", test: "test" };
  const initCommand2 = { name: "hello", test: "test" };
  const testCommand = { name: "hey", test: "test" };

  let commands: Commands<TestCommandType>;

  beforeEach(() => {
    commands = new Commands<TestCommandType>([initCommand, initCommand2]);
  });

  it("should create new instance with array", () => {
    expect(commands.getCommands().length).toBe(2);
    expect(commands.getCommands()[0]).toBe(initCommand);
    expect(commands.getCommands()[1]).toBe(initCommand2);
  });

  it("should not allow direct mutating of implemented command array", () => {
    commands.getCommands().push(testCommand);
    expect(commands.getCommands().length).toBe(2);
  });

  describe("when adding a command", () => {
    let added: boolean;

    it("should successfully add if new and return true", () => {
      added = commands.addCommand(testCommand);
      expect(commands.getCommands().length).toBe(3);
      expect(commands.getCommands()[2]).toBe(testCommand);
      expect(added).toBe(true);
    });

    it("should not add if duplicate and return false", () => {
      added = commands.addCommand(initCommand);
      expect(commands.getCommands().length).toBe(2);
      expect(added).toBe(false);
    });
  });

  describe("when deleting a command by name", () => {
    let deleted: boolean;

    it("should delete if exists and return true", () => {
      deleted = commands.deleteCommand("hi");
      expect(commands.getCommands().length).toBe(1);
      expect(commands.getCommands()[0]).toBe(initCommand2);
      expect(deleted).toBe(true);
    });

    it("should not delete if doesn't exist and return false", () => {
      deleted = commands.deleteCommand("idontexist");
      expect(commands.getCommands().length).toBe(2);
      expect(deleted).toBe(false);
    });
  });
});

interface TestCommandType {
  name: string;
  test: string;
}
