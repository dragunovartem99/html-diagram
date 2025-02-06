export type Graphic = SVGElement;
export type FontMap = Map<string, { light: string, dark: string }>;
export type TvFrame = { t: "featured" | "fen", d: any };

export interface ICaricature {
  create(): Graphic;
}
