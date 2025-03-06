import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";
import { validateBooleanAttribute } from "../utils/validateBooleanAttribute";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped", "colored"];

	#enigma = new Enigma();

	#fen = "8/8/8/8/8/8/8/8";
	// @ts-ignore
	#flipped = false;
	// @ts-ignore
	#colored = false;

	#shadow;
	#board!: HTMLDivElement[];

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
		const board = getBoardHTML();

		this.#board = board;
		board.forEach((square) => this.#shadow.appendChild(square));

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
		const board = this.#enigma.encode({ fen: this.#fen, colored: false });
		[...board].forEach((char, index) =>
			char === " "
				? this.#board[index].removeAttribute("is")
				: this.#board[index].setAttribute("is", char)
		);
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
