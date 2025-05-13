import { expect, test } from "vitest";
import { isWebkit } from "./isWebkit";
import { JSDOM } from "jsdom";

test('Recognizes "Webkit" browser', () => {
	const { window: mockWindow } = new JSDOM();

	mockWindow.webkitConvertPointFromNodeToPage = function () {
		console.log("I am fake deprecated Safari window :)");
	};

	expect(isWebkit(mockWindow)).toBe(true);
});

test("Ignores browsers with more standard methods", () => {
	const { window: mockWindow } = new JSDOM();

	expect(isWebkit(mockWindow)).toBe(false);
});
