import type { FontMap } from "../types";

export class Enigma {
  #fontMap;

  constructor(fontMap: FontMap) {
    this.#fontMap = fontMap;
  }

  encode(fenRecord: string) {
    return fenRecord.split(" ")[0]
      .replace(/\//g, '')
      .replace(/\d/g, (digit) => '_'.repeat(+digit))
      .replace(/./g, (match, offset) => {
        const entry = this.#fontMap.get(match);
        const color = !(offset * 9 & 8) ? "light" : "dark";
        return entry?.[color] || match;
      })
  }
}
