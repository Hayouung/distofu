import { assertType, assertNotNull } from "../src/asserts";

describe("assert functions", () => {
    describe("assertType()", () => {
        it("should not throw error if type assertion passes", () => {
            expect(() => assertType("hello", "string", "message")).not.toThrow();
        });

        it("should throw error if type assertion fails", () => {
            expect(() => assertType("hello", "function", "message")).toThrow();
        });
    });

    describe("assertNotNull()", () => {
        it("should throw error if null", () => {
            expect(() => assertNotNull(null, "message")).toThrow();
        });

        it("should throw error if undefined", () => {
            expect(() => assertNotNull(undefined, "message")).toThrow();
        });

        it("should not throw error if 0", () => {
            expect(() => assertNotNull(0, "message")).not.toThrow();
        });

        it("should not throw error if empty string", () => {
            expect(() => assertNotNull("", "message")).not.toThrow();
        });
    });
});
