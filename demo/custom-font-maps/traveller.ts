import { FontMap } from "../../lib/types";

export const traveller: FontMap = new Map([
	// White
	["K", { light: "K", dark: "(" }],
	["Q", { light: "Q", dark: "+" }],
	["R", { light: "R", dark: "," }],
	["B", { light: "B", dark: "'" }],
	["N", { light: "N", dark: ")" }],
	["P", { light: "P", dark: "*" }],
	// Black
	["k", { light: "k", dark: "-" }],
	["q", { light: "q", dark: "%" }],
	["r", { light: "r", dark: "&" }],
	["b", { light: "b", dark: "!" }],
	["n", { light: "n", dark: "#" }],
	["p", { light: "p", dark: "$" }],
	// Empty
	[" ", { light: "S", dark: "0" }],
]);
