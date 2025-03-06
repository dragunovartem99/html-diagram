import type { FenRecord, Cipher } from "../types";

export class Enigma {
	reverse(cipher: Cipher) {
		return cipher.split("").reverse().join("");
	}

	encode({ fen }: { fen: FenRecord; colored: boolean }) {
		return this.#encode(fen);
	}

	#encode(fen: FenRecord) {
		return fen
			.split(" ")[0] // extract position
			.replace(/\//g, "") // remove slashes
			.replace(/\d/g, (digit) => " ".repeat(+digit)) // expand empty squares
			.slice(0, 64); // cut possible extra symbols (e.g. Crazyhouse)
	}
}
