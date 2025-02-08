export type FenRecord = string;
export type FigurineNotation = string;
export type FontMap = any;
export type Graphic = SVGElement;

export interface IEnigma {
	encode(fen: FenRecord): FigurineNotation;
}

export interface ICaricature {
	create(): Graphic;
}

export interface IHTMLDiagram extends HTMLElement {
	get fen(): FenRecord;
	set fen(fen: FenRecord);
	get fontMap(): FontMap;
	set fontMap(fontMap: FontMap);
}
