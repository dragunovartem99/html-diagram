import { getBoardHTML } from "../static/getBoardHTML";
import { FenRecord } from "../types";
import { getIterableFen } from "../utils/fen";

export class Board {
	#html = getBoardHTML();

	setPosition(fen: FenRecord) {
		getIterableFen(fen).forEach((char, index) =>
			isNaN(+char)
				? this.#html[index].setAttribute("is", char)
				: this.#html[index].removeAttribute("is")
		);
	}

	get html() {
		return this.#html;
	}
}
