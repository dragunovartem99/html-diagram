import type { BoardObject, FenRecord, IEnigma, Cipher } from "../types";
import { getFontMap } from "../static/getFontMap";
import { getMask } from "../static/getMask";

export class Enigma implements IEnigma {
	#fontMap = getFontMap();

	encode(fen: FenRecord) {
		let board = "";
		let masks = "";

		[...this.#prepare(fen)].forEach((char, index) => {
			const boardObject = this.#fontMap.get(char as BoardObject)!;
			//const background = (index * 9) & 8 ? "dark" : "light";
			const background = (index * 9) & 8 ? "light" : "light";
			board += boardObject[background];
			masks += getMask(char);
		});

		return { board, masks };
	}

	#prepare(fen: FenRecord) {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.slice(0, 64); // cut possible extra symbols (e.g. Crazyhouse)
	}

	reverse(position: Cipher) {
		return position.split("").reverse().join("");
	}
}
