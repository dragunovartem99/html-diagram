import { FontMap } from "../../src/types";

export const tasc: FontMap = new Map([
	// White
	["K", { light: "M", dark: "m" }],
	["Q", { light: "L", dark: "l" }],
	["R", { light: "K", dark: "k" }],
	["B", { light: "J", dark: "j" }],
	["N", { light: "I", dark: "i" }],
	["P", { light: "H", dark: "h" }],
	// Black
	["k", { light: "G", dark: "g" }],
	["q", { light: "F", dark: "f" }],
	["r", { light: "E", dark: "e" }],
	["b", { light: "D", dark: "d" }],
	["n", { light: "C", dark: "c" }],
	["p", { light: "B", dark: "b" }],
	// Empty
	[" ", { light: "A", dark: "a" }],
]);
