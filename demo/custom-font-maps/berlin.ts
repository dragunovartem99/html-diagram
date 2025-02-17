import { FontMap } from "../../src/types";

export const berlin: FontMap = new Map([
	// White
	["K", { light: "k", dark: "K" }],
	["Q", { light: "q", dark: "Q" }],
	["R", { light: "r", dark: "R" }],
	["B", { light: "b", dark: "B" }],
	["N", { light: "h", dark: "H" }],
	["P", { light: "p", dark: "P" }],
	// Black
	["k", { light: "l", dark: "L" }],
	["q", { light: "w", dark: "W" }],
	["r", { light: "t", dark: "T" }],
	["b", { light: "n", dark: "N" }],
	["n", { light: "j", dark: "J" }],
	["p", { light: "o", dark: "O" }],
	// Empty
	[" ", { light: " ", dark: "+" }],
]);
