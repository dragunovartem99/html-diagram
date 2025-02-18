import { FontMap } from "../../lib/types";

export const alpha2: FontMap = new Map([
	// White
	["K", { light: "È", dark: "É" }],
	["Q", { light: "Æ", dark: "Ç" }],
	["R", { light: "Ä", dark: "Å" }],
	["B", { light: "À", dark: "Á" }],
	["N", { light: "Â", dark: "Ã" }],
	["P", { light: "Ê", dark: "Ë" }],
	// Black
	["k", { light: "è", dark: "é" }],
	["q", { light: "æ", dark: "ç" }],
	["r", { light: "ä", dark: "å" }],
	["b", { light: "à", dark: "á" }],
	["n", { light: "â", dark: "ã" }],
	["p", { light: "ê", dark: "ë" }],
	// Empty
	[" ", { light: "'", dark: "#" }],
]);
