import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export class HTMLDiagram extends HTMLElement {
	static observedAttributes = ["fen", "flipped"];

	#fen = "8/8/8/8/8/8/8/8";
	#flipped = false;
	#enigma = new Enigma();
	#shadow;
	#position!: HTMLDivElement;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		if (!this.#position) {
			this.#setHTML();
			this.#setCSS();
		}

		this.#render();
	}

	#setHTML() {
		const { root, position } = getBoardHTML();
		this.#position = position;
		this.#shadow.appendChild(root);
	}

	#setCSS() {
		this.#shadow.adoptedStyleSheets.push(getBoardCSS());
	}

	#render() {
		let cipher = this.#enigma.encode(this.#fen);

		this.#flipped && (cipher = this.#enigma.reverse(cipher));

		this.#position.textContent = cipher;
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

		this.#position && this.#render();
	}
}
