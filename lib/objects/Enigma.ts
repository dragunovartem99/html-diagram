import type { BoardObject, FenRecord, Cipher } from "../types";

import { getFontMap } from "../static/getFontMap";
import { getMaskMap } from "../static/getMaskMap";

export class Enigma {
	#fontMap = getFontMap();
	#maskMap = getMaskMap();

	reverse(cipher: Cipher) {
		return cipher.split("").reverse().join("");
	}

	encode({ fen, colored }: { fen: FenRecord; colored: boolean }) {
		return colored ? this.#encodeColored(fen) : this.#encodeDefault(fen);
	}

	#encodeDefault(fen: FenRecord) {
		let board = "";

		this.#encode(fen, (char: string, index: number) => {
			const background = (index * 9) & 8 ? "dark" : "light";
			board += this.#fontMap.get(char as BoardObject)![background];
		});

		return { board, masks: null };
	}

	#encodeColored(fen: FenRecord) {
		let board = "";
		let masks = "";

		this.#encode(fen, (char: string) => {
			board += this.#fontMap.get(char as BoardObject)!.light;
			masks += this.#maskMap.get(char as BoardObject);
		});

		return { board, masks };
	}

	#encode(fen: FenRecord, callback: Function) {
		[...this.#prepare(fen)].forEach((char, index) => callback(char, index));
	}

	#prepare(fen: FenRecord) {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.slice(0, 64); // cut possible extra symbols (e.g. Crazyhouse)
	}
}
