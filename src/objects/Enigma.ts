import type { BoardObject, FenRecord, FigurineNotation, FontMap, IEnigma } from "../types";

export class Enigma implements IEnigma {
	#fontMap;

	constructor(fontMap: FontMap) {
		this.#fontMap = fontMap;
	}

	encode(fen: FenRecord): FigurineNotation {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.replace(/./g, (char, offset) => {
				const boardObject = this.#fontMap.get(char as BoardObject);
				if (!boardObject) return char;

				const squareColor = (offset * 9) & 8 ? "dark" : "light";
				return boardObject[squareColor];
			});
	}
}
