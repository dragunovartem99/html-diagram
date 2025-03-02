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

		this.#shadow.appendChild(this.#board);
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#render() {
		let { board, masks } = this.#enigma.encode({ fen: this.#fen, colored: this.#colored });

		const textElements = this.#board.querySelectorAll("text");

		textElements.forEach((textElement, index) => {
			// Calculate the start and end index for the substring
			const start = index * 8;
			const end = start + 8;
			// Insert the substring into the <text> element
			textElement.textContent = board.substring(start, end);
		});
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
