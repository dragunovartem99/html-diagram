import { FontMap } from "../../lib/types";

export const tasc: FontMap = new Map([
	// White
	["K", { light: "M", dark: "m" }],
	["Q", { light: "L", dark: "l" }],
	["R", { light: "I", dark: "i" }],
	["B", { light: "K", dark: "k" }],
	["N", { light: "J", dark: "j" }],
	["P", { light: "H", dark: "h" }],
	// Black
	["k", { light: "G", dark: "g" }],
	["q", { light: "F", dark: "f" }],
	["r", { light: "C", dark: "c" }],
	["b", { light: "E", dark: "e" }],
	["n", { light: "D", dark: "d" }],
	["p", { light: "B", dark: "b" }],
	// Empty
	[" ", { light: "A", dark: "a" }],
]);
