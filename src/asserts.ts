export function assertType(toAssert: any, expectedType: ExpectedType, message: string) {
    if (typeof toAssert !== expectedType) {
        throw new Error(message);
    }
}

export function assertNotNull(toAssert: any, message: string) {
    if (toAssert == null) {
        throw new Error(message);
    }
}

type ExpectedType = "number" | "string" | "object" | "boolean" | "symbol" | "bigint" | "undefined" | "function";
