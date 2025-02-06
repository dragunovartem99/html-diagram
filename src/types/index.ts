export type FenRecord = string;
export type FigurineNotation = string;

export type Graphic = SVGElement;

export type FontMap = Map<string, {
    light: string,
    dark: string
}>;

export type TVFrame = {
  t: "featured" | "fen",
  d: any
};

export interface ICaricature {
  create(): Graphic;
}
