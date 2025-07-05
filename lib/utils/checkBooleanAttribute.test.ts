import { describe, expect, it } from "vitest";

import { checkBooleanAttribute } from "./checkBooleanAttribute";

describe("Works with boolean attributes in modern-browser-like way", () => {
	// https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML

	it("Evaluates null values as false", () => {
		expect(checkBooleanAttribute(null)).toBe(false);
	});

	it("Evaluates empty strings as true", () => {
		expect(checkBooleanAttribute("")).toBe(true);
	});

	it("Evaluates same-name string values as true", () => {
		expect(checkBooleanAttribute("flipped")).toBe(true);
		expect(checkBooleanAttribute("Flipped")).toBe(true);
		expect(checkBooleanAttribute("FLIPPED")).toBe(true);
	});
});
