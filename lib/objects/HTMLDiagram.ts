import type { IHTMLDiagram, Options } from "../types";
import { Enigma } from "./Enigma";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

export default ({ fen, flipped, fontMap }: Options) => {
	return class extends HTMLElement implements IHTMLDiagram {
		static observedAttributes = ["fen", "flipped"];

		#fen = fen;
		#flipped = flipped;
		#fontMap = fontMap;

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
			this.#div = getBoardHTML();
			this.#shadow.appendChild(this.#div);
		}

		#setCSS() {
			this.style.display = "block";
			this.style.containerType = "inline-size";
			this.#shadow.adoptedStyleSheets.push(getBoardCSS());
		}

		#render() {
			if (!this.#div) return;

			const enigma = new Enigma(this.#fontMap);

			let position = enigma.encode(this.#fen);
			this.#flipped && (position = enigma.reverse(position));

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

		get fontMap() {
			return this.#fontMap;
		}

		set fontMap(fontMap) {
			this.#fontMap = fontMap;
			this.#render();
		}

		attributeChangedCallback(name: string, oldValue: string, newValue: string) {
			if (newValue === oldValue) return;
			else if (name === "flipped") {
				// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
				const validValues = ["", "flipped"];
				this.flipped = validValues.includes(newValue?.toLowerCase());
			} else this.fen = newValue;
		}
	};
};
