import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#fen = "8/8/8/8/8/8/8/8";
	#flipped = false;
	#enigma = new Enigma();

	#shadow;
	#board!: HTMLDivElement;
	#masks?: HTMLDivElement;

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
		const { board, masks } = getBoardHTML();

		this.#board = board;
		this.#masks = masks;

		this.#shadow.appendChild(this.#board);
		this.#shadow.appendChild(this.#masks);
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#render() {
		let { board, masks } = this.#enigma.encode(this.#fen);

		this.#flipped && (board = this.#enigma.reverse(board));
		this.#flipped && (masks = this.#enigma.reverse(masks));

		this.#board.textContent = board;
		this.#masks!.textContent = masks;
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (newValue === oldValue) {
			return;
		}

		switch (name) {
			case "fen":
				this.#fen = newValue;
				break;
			case "flipped":
				// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
				const isValid = ["flipped", ""].includes(newValue?.toLowerCase());
				this.#flipped = isValid;
				isValid || this.removeAttribute("flipped");
		}

		this.#board && this.#render();
	}
}
