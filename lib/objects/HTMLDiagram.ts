import { getBoardCSS } from "../functions/getBoardCSS";
import { IBoard } from "../types";
import { checkBooleanAttribute } from "../utils/checkBooleanAttribute";
import { isWebkit } from "../utils/isWebkit";
import { Board } from "./Board";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#board: IBoard;
	#shadow: ShadowRoot;
	#resizeObserver?: ResizeObserver;

	#attributeSetters: Record<string, (value: string) => void> = {
		fen: (value) => (this.#board.fen = value),
		flipped: (value) => (this.#board.flipped = checkBooleanAttribute(value)),
	};

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
		this.#board.html.forEach((square) => this.#shadow.append(square));
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
		this.#attributeSetters[name]?.(newValue);
	}
}
