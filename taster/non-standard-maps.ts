const alpha2 = new Map([
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

const berlin = new Map([
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

export const nonStandardMaps = new Map([
	["Alpha2", alpha2],
	["Berlin", berlin],
]);
