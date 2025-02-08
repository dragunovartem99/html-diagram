export type FenRecord = string;
export type FigurineNotation = string;
export type Graphic = SVGElement;
export type FontMap = any;

export interface ICaricature {
	create(): Graphic;
}

export interface IHTMLDiagram extends HTMLElement {
	get fen(): FenRecord;
	set fen(fen: FenRecord);
	set fontMap(fontMap: FontMap);
}
