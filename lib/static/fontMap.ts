import type { FontMap } from "../types";

export const fontMap: FontMap = new Map([
	// White (English)
	["K", { light: "K", dark: "k" }],
	["Q", { light: "Q", dark: "q" }],
	["R", { light: "R", dark: "r" }],
	["B", { light: "B", dark: "b" }],
	["N", { light: "N", dark: "n" }],
	["P", { light: "P", dark: "p" }],
	// Black (Russian)
	["k", { light: "Ц", dark: "ц" }],
	["q", { light: "Ф", dark: "ф" }],
	["r", { light: "Л", dark: "л" }],
	["b", { light: "С", dark: "с" }],
	["n", { light: "К", dark: "к" }],
	["p", { light: "П", dark: "п" }],
	// Empty
	[" ", { light: "+", dark: "=" }],
]);
