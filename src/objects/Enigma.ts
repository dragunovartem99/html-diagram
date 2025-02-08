import type { FenRecord, FigurineNotation, FontMap, IEnigma } from "../types";

export class Enigma implements IEnigma {
	#fontMap;

	constructor(fontMap: FontMap) {
		this.#fontMap = fontMap;
	}

	encode(fen: FenRecord): FigurineNotation {
		return fen
			.split(" ")[0]
			.replace(/\//g, "")
			.replace(/\d/g, (digit) => " ".repeat(+digit))
			.replace(/./g, (match, offset) => {
				const entry = this.#fontMap.get(match);
				const color = (offset * 9) & 8 ? "dark" : "light";
				return entry?.[color] || match;
			});
	}
}
