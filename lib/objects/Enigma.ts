import type { BoardObject, FenRecord, Cipher } from "../types";

import { getFontMap } from "../static/getFontMap";
import { getMaskMap } from "../static/getMaskMap";

export class Enigma {
	#fontMap = getFontMap();
	#maskMap = getMaskMap();

	reverse(cipher: Cipher) {
		return cipher.split("").reverse().join("");
	}

	encode({ fen }: { fen: FenRecord; colored: boolean }) {
		return this.#encodeDefault(fen);
	}

	#encodeDefault(fen: FenRecord) {
		return this.#encode(fen, (char: string, offset: number) => {
			const boardObject = this.#fontMap.get(char as BoardObject);
			const background = (offset * 9) & 8 ? "dark" : "light";
			return boardObject![background];
		});
	}

	#encode(fen: FenRecord, callback: Function) {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.slice(0, 64) // cut possible extra symbols (e.g. Crazyhouse)
			.replace(/./g, (...args) => callback(...args)) // substitute
			.match(/.{1,8}/g); // turn into array
	}
}
