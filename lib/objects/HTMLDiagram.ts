import { Board } from "./Board";
import { getBoardCSS } from "../static/getBoardCSS";
import { isWebkit } from "../utils/isWebkit";
import { checkBooleanAttribute } from "../utils/checkBooleanAttribute";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#board = new Board();
	#shadow;
	#resizeObserver?: ResizeObserver;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		this.#setHTML();
		this.#setCSS();
		isWebkit(window) && this.#supportWebkit();
	}

	disconnectedCallback() {
		this.#resizeObserver?.unobserve(this);
	}

	#setHTML() {
		this.#board.html.forEach((square) => this.#shadow.appendChild(square));
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#supportWebkit() {
		const setUnit = () => {
			this.setAttribute("style", `--diagram-webkit-unit: ${this.clientWidth / 8}px;`);
		};

		requestAnimationFrame(() => setUnit());
		this.#resizeObserver = new ResizeObserver(setUnit);
		this.#resizeObserver.observe(this);
	}

	attributeChangedCallback(name: string, _: string, newValue: string) {
		name === "fen" && (this.#board.fen = newValue);
		name === "flipped" && (this.#board.flipped = checkBooleanAttribute(newValue));
	}
}
