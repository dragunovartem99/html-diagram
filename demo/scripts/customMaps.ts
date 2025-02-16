import { FontMap } from "../../src/types";

const alpha2: FontMap = new Map([
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

const berlin: FontMap = new Map([
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

const smart: FontMap = new Map([
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

export default new Map([
	["Alpha2", alpha2],
	["Berlin", berlin],
	["Smart", smart],
]);
