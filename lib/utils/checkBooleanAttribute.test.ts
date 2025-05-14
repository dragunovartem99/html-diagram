import { expect, test } from "vitest";
import { checkBooleanAttribute } from "./checkBooleanAttribute";

test("Returns false for null values", () => {
	expect(checkBooleanAttribute(null)).toBe(false);
});

test("Returns true for string values", () => {
	expect(checkBooleanAttribute("")).toBe(true);
	expect(checkBooleanAttribute("flipped")).toBe(true);
});
