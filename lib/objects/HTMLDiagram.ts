import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";
import { validateBooleanAttribute } from "../utils/validateBooleanAttribute";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped", "colored"];

	#enigma = new Enigma();

	#fen = "8/8/8/8/8/8/8/8";
	#flipped = false;
	#colored = false;

	#shadow;

	#board?: SVGElement[];

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		if (!this.#board) {
			this.#setHTML();
			this.#setCSS();
		}

		this.#render();
	}

	#setHTML() {
		const { board, ranks } = getBoardHTML();

		this.#board = ranks;

		this.#shadow.appendChild(board);
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#render() {
		const { board, masks } = this.#enigma.encode({
			fen: this.#fen,
			colored: this.#colored
		});

		board!.forEach((rank, index) => (this.#board![index].textContent = rank));
	}

	attributeChangedCallback(name: string, _: string, newValue: string) {
		switch (name) {
			case "fen":
				this.#fen = newValue;
				break;
			case "flipped":
				this.#flipped = validateBooleanAttribute("flipped", newValue);
				break;
			case "colored":
				this.#colored = validateBooleanAttribute("colored", newValue);
		}

		this.#board && this.#render();
	}
}
