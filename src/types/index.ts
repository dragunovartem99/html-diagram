export type Graphic = SVGElement;
export type FontMap = Map<string, { light: string, dark: string }>;

export interface ICaricature {
  create(): Graphic;
}
