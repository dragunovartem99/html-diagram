import type { IHTMLDiagram } from "../types";
import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export class HTMLDiagram extends HTMLElement implements IHTMLDiagram {
	static observedAttributes = ["fen", "flipped"];

	#fen = "8/8/8/8/8/8/8/8";
	#flipped = false;
	#enigma = new Enigma();
	#shadow;
	#div!: HTMLDivElement;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		this.#setHTML();
		this.#setCSS();
		this.#render();
	}

	#setHTML() {
		const { parent, child } = getBoardHTML();
		this.#div = child;
		this.#shadow.appendChild(parent);
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#render() {
		if (!this.#div) return;

		let position = this.#enigma.encode(this.#fen);

		if (this.#flipped) {
			position = this.#enigma.reverse(position);
		}

		this.#div.textContent = position;
	}

	get fen() {
		return this.#fen;
	}

	set fen(fen) {
		this.#fen = fen;
		this.#render();
	}

	get flipped() {
		return this.#flipped;
	}

	set flipped(flipped) {
		this.#flipped = flipped;
		this.#render();
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (newValue === oldValue) return;

		if (name === "flipped") {
			// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
			const validValues = ["", "flipped"];
			this.flipped = validValues.includes(newValue?.toLowerCase());
		} else {
			this.fen = newValue;
		}
	}
}
