import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped", "colored"];

	#fen = "8/8/8/8/8/8/8/8";
	#flipped = false;
	#colored = false;
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
		let { board, masks } = this.#enigma.encode({ fen: this.#fen, colored: this.#colored });

		this.#flipped && (board = this.#enigma.reverse(board));
		this.#board.textContent = board;

		if (masks) {
			this.#flipped && (masks = this.#enigma.reverse(masks));
			this.#masks!.textContent = masks;
		}
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (newValue === oldValue) {
			return;
		}

		if (name === "fen") {
			this.#fen = newValue;
		} else if (name === "flipped") {
			// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
			const isValid = ["flipped", ""].includes(newValue?.toLowerCase());
			this.#flipped = isValid;
			isValid || this.removeAttribute("flipped");
		} else if (name === "colored") {
			const isValid2 = ["colored", ""].includes(newValue?.toLowerCase());
			this.#colored = isValid2;
			isValid2 || this.removeAttribute("colored");
		}

		this.#board && this.#render();
	}
}
