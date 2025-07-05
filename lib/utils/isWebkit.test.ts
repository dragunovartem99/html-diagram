import { expect, it } from "vitest";
import { JSDOM } from "jsdom";

import { isWebkit } from "./isWebkit";

it('Recognizes "WebKit" browser', () => {
	const { window: mockWindow } = new JSDOM();

	mockWindow.webkitConvertPointFromNodeToPage = function () {
		console.log("I am a fake deprecated Webkit window");
	};

	expect(isWebkit(mockWindow)).toBe(true);
});

it("Recognizes browsers without WebKit-specific methods", () => {
	const { window: mockWindow } = new JSDOM();

	expect(isWebkit(mockWindow)).toBe(false);
});
