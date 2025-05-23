import type { BoardHTML, FenRecord, IBoard } from "../types";
import { getBoardHTML } from "../functions/getBoardHTML";
import { getIterableFen } from "../functions/getIterableFen";

export class Board implements IBoard {
	#html: BoardHTML = getBoardHTML();
	#fen: FenRecord = "8/8/8/8/8/8/8/8";
	#flipped: boolean = false;

	#render() {
		const fen = getIterableFen({ fen: this.#fen, reversed: this.#flipped });

		fen.forEach((char, index) => {
			if (char === " ") {
				this.#html[index].removeAttribute("is");
			} else {
				this.#html[index].setAttribute("is", char);
			}
		});
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
