import { IBoard } from "../types";
import { Board } from "./Board";
import { getBoardCSS } from "../functions/getBoardCSS";
import { isWebkit } from "../utils/isWebkit";
import { checkBooleanAttribute } from "../utils/checkBooleanAttribute";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#board: IBoard;
	#shadow: ShadowRoot;
	#resizeObserver?: ResizeObserver;

	constructor() {
		super();
		this.#board = new Board();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		this.#setHTML();
		this.#setCSS();

		if (isWebkit(window)) {
			this.#addWebkitPolyfill();
		}
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

	#addWebkitPolyfill() {
		// for now, WebKit works poorly with cqw + zooming in the browser

		this.#resizeObserver = new ResizeObserver((entries) => {
			requestAnimationFrame(() => {
				const board = entries[0].target;
				const squareWidth = board.getBoundingClientRect().width / 8;
				this.setAttribute("style", `--diagram-webkit-unit: ${squareWidth}px;`);
			});
		});

		this.#resizeObserver.observe(this);
	}

	attributeChangedCallback(name: string, _: string, newValue: string) {
		switch (name) {
			case "fen":
				this.#board.fen = newValue;
				break;
			case "flipped":
				this.#board.flipped = checkBooleanAttribute(newValue);
		}
	}
}
