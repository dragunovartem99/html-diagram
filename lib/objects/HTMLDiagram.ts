import { IBoard } from "../types";
import { Board } from "./Board";
import { getBoardCSS } from "../functions/getBoardCSS";
import { isWebkit } from "../utils/isWebkit";
import { checkBooleanAttribute } from "../utils/checkBooleanAttribute";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#board: IBoard = new Board();
	#shadow;
	#resizeObserver?: ResizeObserver;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		this.#setHTML();
		this.#setCSS();

		if (isWebkit(window)) this.#supportWebkit();
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

		setUnit();

		this.#resizeObserver = new ResizeObserver(setUnit);
		this.#resizeObserver.observe(this);
	}

	attributeChangedCallback(name: string, _: string, newValue: string) {
		if (name === "fen") {
			this.#board.fen = newValue;
		} else if (name === "flipped") {
			this.#board.flipped = checkBooleanAttribute(newValue);
		}
	}
}
