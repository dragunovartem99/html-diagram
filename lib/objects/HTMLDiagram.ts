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
	#colored = false;

	#shadow;

	#board!: SVGElement[];
	#masks?: SVGElement[] | null = null;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		if (!this.#board) {
			this.#setCSS();
			this.#initBoard();
		}

		if (this.#colored) {
			this.#initMasks();
		}

		this.#render();
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#initBoard() {
		const { svg, ranks } = getBoardHTML();
		this.#board = ranks;
		this.#shadow.appendChild(svg);
	}

	#initMasks() {
		const { svg, ranks } = getBoardHTML();
		this.#masks = ranks;
		this.#shadow.appendChild(svg);
	}

	#destroyMasks() {
		this.#masks = null;
		this.#shadow.removeChild(this.#shadow.lastChild!);
	}

	#render() {
		const { board, masks } = this.#enigma.encode({
			fen: this.#fen,
			colored: this.#colored,
		});

		this.#board.forEach((rank, index) => (rank.textContent = board![index]));

		if (masks) {
			this.#masks!.forEach((rank, index) => (rank.textContent = masks![index]));
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
				this.#colored ? this.#initMasks() : this.#destroyMasks();
		}

		this.#board && this.#render();
	}
}
