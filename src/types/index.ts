export type BoardObject =
	| "K"
	| "Q"
	| "R"
	| "B"
	| "N"
	| "P"
	| "k"
	| "q"
	| "r"
	| "b"
	| "n"
	| "p"
	| " ";

export type FontMap = Map<BoardObject, { light: string; dark: string }>;

export type Board = SVGElement;
export type FenRecord = string;
export type FigurineNotation = string;

export interface ICaricature {
	create(): Board;
}

export interface IEnigma {
	encode(fen: FenRecord): FigurineNotation;
}

export interface IHTMLDiagram extends HTMLElement {
	fen: FenRecord;
	fontMap: FontMap;
}
