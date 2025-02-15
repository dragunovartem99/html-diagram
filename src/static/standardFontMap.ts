import type { FontMap } from "../types";

export const standardFontMap: FontMap = new Map([
	// White
	["K", { light: "k", dark: "K" }],
	["Q", { light: "q", dark: "Q" }],
	["R", { light: "r", dark: "R" }],
	["B", { light: "b", dark: "B" }],
	["N", { light: "n", dark: "N" }],
	["P", { light: "p", dark: "P" }],
	// Black
	["k", { light: "l", dark: "L" }],
	["q", { light: "w", dark: "W" }],
	["r", { light: "t", dark: "T" }],
	["b", { light: "v", dark: "V" }],
	["n", { light: "m", dark: "M" }],
	["p", { light: "o", dark: "O" }],
	// Empty
	[" ", { light: "*", dark: "+" }],
]);
