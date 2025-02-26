import type { BoardObject, FenRecord, IEnigma, Cipher } from "../types";
import { getFontMap } from "../static/getFontMap";

export class Enigma implements IEnigma {
	#fontMap = getFontMap();

	encode(fen: FenRecord) {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.slice(0, 64) // cut possible extra symbols (e.g. Crazyhouse)
			.replace(/./g, (char, offset) => {
				const boardObject = this.#fontMap.get(char as BoardObject);
				if (!boardObject) return char;

				const squareColor = (offset * 9) & 8 ? "dark" : "light";
				return boardObject[squareColor];
			});
	}

	reverse(position: Cipher) {
		return position.split("").reverse().join("");
	}
}
