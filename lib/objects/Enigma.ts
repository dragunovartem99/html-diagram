import { getFontMap } from "../static/getFontMap";
import type { BoardObject, FenRecord, IEnigma, Position } from "../types";

export class Enigma implements IEnigma {
	#fontMap = getFontMap();

	encode(fen: FenRecord) {
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

	reverse(position: Position) {
		return position.split("").reverse().join("");
	}
}
