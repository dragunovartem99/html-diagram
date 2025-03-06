import { getBoardCSS } from "../static/getBoardCSS";
import { Board } from "./Board";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#board = new Board();
	#shadow;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		this.#setHTML();
		this.#setCSS();
		this.#supportWebkit();
	}

	#setHTML() {
		this.#board.html.forEach((square) => this.#shadow.appendChild(square));
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#supportWebkit() {
		// @ts-ignore
		const isWebkit = typeof window.webkitConvertPointFromNodeToPage === "function";

		if (!isWebkit) return;

		const setUnit = () =>
			this.setAttribute(
				"style",
				`--diagram-webkit-unit: ${this.getBoundingClientRect().width / 8}px;`
			);

		setUnit();
		window.addEventListener("resize", setUnit);
	}

	// @ts-ignore
	attributeChangedCallback(name: string, _: string, newValue: string) {
		name === "fen" && (this.#board.fen = newValue);
		name === "flipped" && (this.#board.flipped = newValue !== null);
	}
}
