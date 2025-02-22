import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export class HTMLDiagram extends HTMLElement {
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

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (newValue === oldValue) {
			return;
		}

		switch (name) {
			case "fen":
				this.#fen = newValue;
				break;
			case "flipped":
				// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
				const isValid = ["flipped", ""].includes(newValue?.toLowerCase());
				this.#flipped = isValid;
				isValid || this.removeAttribute("flipped");
		}

		this.#render();
	}
}
