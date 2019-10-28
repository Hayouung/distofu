import {
    getStandardCommands,
    StandardCommand,
    addStandardCommand
} from "../../../src/commands/standard/standard-command";

const TEST_COMMAND = "iamtestcommandhopefullythisdoesntgetused!";

describe("standard-command", () => {
    describe("getStandardCommands()", () => {
        let stdCmds: StandardCommand[];

        beforeEach(() => {
            stdCmds = getStandardCommands();
        });

        it("should get standard commands", () => {
            expect(stdCmds.length).toBeGreaterThan(0);
        });

        it("should not mutate implemented standard commands array", () => {
            stdCmds.push({ name: TEST_COMMAND, perform: () => {} });
            expect(stdCmds.length).not.toEqual(getStandardCommands().length);
            expect(stdCmds.findIndex(command => command.name === TEST_COMMAND)).toBeGreaterThan(-1);
        });
    });

    describe("addStandardCommand()", () => {
        it("should add standard command to implemented array", () => {
            const stdCmdsBefore = getStandardCommands();
            expect(addStandardCommand({ name: TEST_COMMAND, perform: () => {} })).toBe(true);
            expect(stdCmdsBefore.length).not.toBe(getStandardCommands().length);
        });
    });
});
