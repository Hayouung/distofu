import { isAliasesMatches, isNameMatches } from "../../src/commands/command-utils";
import { StandardCommand } from "../../src/commands/standard/standard-command";

describe("command utils", () => {
    const stdCmd = {
        name: "hello",
        aliases: ["hi", "hey"]
    } as StandardCommand;

    describe("isNameMatches()", () => {
        it("should return true if command name matches", () => {
            expect(isNameMatches(stdCmd, "hello")).toBe(true);
        });

        it("should return false if command name does not match", () => {
            expect(isNameMatches(stdCmd, "hi")).toBe(false);
        });
    });

    describe("isAliasesMatches()", () => {
        it("should return true if aliases matches", () => {
            expect(isAliasesMatches(stdCmd, "hi")).toBe(true);
            expect(isAliasesMatches(stdCmd, "hey")).toBe(true);
        });

        it("should return false if aliases does not match", () => {
            expect(isAliasesMatches(stdCmd, "hello")).toBe(false);
        });
    });
});
