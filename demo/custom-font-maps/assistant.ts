import { FontMap } from "../../lib/types";

export const assistant: FontMap = new Map([
	// White
	["K", { light: "5", dark: "6" }],
	["Q", { light: "1", dark: "2" }],
	["R", { light: "-", dark: "." }],
	["B", { light: ")", dark: "*" }],
	["N", { light: "%", dark: "&" }],
	["P", { light: "!", dark: '"' }],
	// Black
	["k", { light: "7", dark: "8" }],
	["q", { light: "3", dark: "4" }],
	["r", { light: "/", dark: "0" }],
	["b", { light: "+", dark: "," }],
	["n", { light: "'", dark: "(" }],
	["p", { light: "#", dark: "$" }],
	// Empty
	[" ", { light: "?", dark: "@" }],
]);
