// @vitest-environment jsdom

import { expect, it } from "vitest";
import { getBoardHTML } from "./getBoardHTML";

const isDark = (el: HTMLDivElement) => el.hasAttribute("dark");

it("Returns grid of 64 squares", () => {
	const html = getBoardHTML();

	expect(html).toHaveLength(64);
});

it("Returns only div elements", () => {
	const html = getBoardHTML();

	expect(html.every((el) => el instanceof HTMLDivElement)).toBe(true);
});

it("Returns 32 dark and light squares", () => {
	const html = getBoardHTML();

	expect(html.filter((el) => isDark(el))).toHaveLength(32);
	expect(html.filter((el) => !isDark(el))).toHaveLength(32);
});

it("Returns squares in right order", () => {
	const html = getBoardHTML();

	// prettier-ignore
	const matrixSnapshot = [
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
	]; // 1 means "dark"

	expect(html.every((el, index) => isDark(el) === !!matrixSnapshot[index])).toBe(true);
});
