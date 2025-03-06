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
		this.#masks = masks;

		this.#shadow.appendChild(this.#board);
		this.#shadow.appendChild(this.#masks);

		// @ts-ignore
		const isWebkit = typeof window.webkitConvertPointFromNodeToPage === "function";

		if (isWebkit) {
			const setUnit = () =>
				this.setAttribute(
					"style",
					`--diagram-webkit-unit: ${this.getBoundingClientRect().width / 8}px;`
				);

			setUnit();
			window.addEventListener("resize", setUnit);
		}
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
