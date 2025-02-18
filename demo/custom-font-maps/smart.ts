import { FontMap } from "../../lib/types";

export const smart: FontMap = new Map([
	// White
	["K", { light: "F", dark: "L" }],
	["Q", { light: "E", dark: "K" }],
	["R", { light: "D", dark: "J" }],
	["B", { light: "C", dark: "I" }],
	["N", { light: "B", dark: "H" }],
	["P", { light: "A", dark: "G" }],
	// Black
	["k", { light: "f", dark: "l" }],
	["q", { light: "e", dark: "k" }],
	["r", { light: "d", dark: "j" }],
	["b", { light: "c", dark: "i" }],
	["n", { light: "b", dark: "h" }],
	["p", { light: "a", dark: "g" }],
	// Empty
	[" ", { light: "M", dark: "m" }],
]);
