// prettier-ignore
export type BoardObject = "K" | "Q" | "R" | "B" | "N" | "P" | "k" | "q" | "r" | "b" | "n" | "p" | " ";

export type FontMap = Map<BoardObject, { light: string; dark: string }>;
export type FontName = string;

export type FenRecord = string;
export type Position = string;

export interface IEnigma {
	encode(fen: FenRecord): Position;
	reverse(position: Position): Position;
}

export interface IHTMLDiagram extends HTMLElement {
	fen: FenRecord;
	flipped: boolean;
}
