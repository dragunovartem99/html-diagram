import type { FenRecord } from "../types";
import { getBoardHTML } from "../static/getBoardHTML";
import { getIterableFen } from "../utils/getIterableFen";

export class Board {
	#html = getBoardHTML();
	#fen: FenRecord = "8/8/8/8/8/8/8/8";
	#flipped = false;

	#render() {
		getIterableFen({ fen: this.#fen, reversed: this.#flipped }).forEach((char, index) =>
			isNaN(+char)
				? this.#html[index].setAttribute("is", char)
				: this.#html[index].removeAttribute("is")
		);
	}

	get html() {
		return this.#html;
	}

	set fen(fen: FenRecord) {
		this.#fen = fen;
		this.#render();
	}

	set flipped(flipped: boolean) {
		this.#flipped = flipped;
		this.#render();
	}
}
