// @vitest-environment jsdom

import { test, expect } from "vitest";
import { getBoardHTML } from "./getBoardHTML";

const isDark = (el: HTMLDivElement) => el.hasAttribute("dark");

test("Returns grid of 64 squares", () => {
	const html = getBoardHTML();
	expect(html.length === 64).toBe(true);
});

test("Returns only div elements", () => {
	const html = getBoardHTML();
	expect([...html].every((el) => el instanceof HTMLDivElement)).toBe(true);
});

test("Returns 32 dark and light squares", () => {
	const html = getBoardHTML();
	expect([...html].filter((el) => isDark(el)).length).toBe(32);
	expect([...html].filter((el) => !isDark(el)).length).toBe(32);
});

test("Returns squares in right order", () => {
	const html = getBoardHTML();

	// prettier-ignore
	const matrix = [
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, 0, 1, 0,
	]; // 1 means "dark"

	expect([...html].every((el, index) => isDark(el) === !!matrix[index])).toBe(true);
});
