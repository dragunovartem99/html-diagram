import type { FenRecord, FontMap, IHTMLDiagram } from "../types";

import { defaultFontMap } from "../static/defaultFontMap";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

import { Enigma } from "./Enigma";

export default (fontMap: FontMap = defaultFontMap) =>
	class extends HTMLElement implements IHTMLDiagram {
		static observedAttributes = ["fen", "flipped"];

		#fen: FenRecord = "8/8/8/8/8/8/8/8";
		#isFlipped = false;
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
			this.#insertPosition();
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

		#insertPosition() {
			if (!this.#div) return;

			const enigma = new Enigma(this.#fontMap);

			let position = enigma.encode(this.#fen);
			this.#isFlipped && (position = enigma.reverse(position));

			this.#div.textContent = position;
		}

		get fen(): FenRecord {
			return this.#fen;
		}

		set fen(fen: FenRecord) {
			this.#fen = fen;
			this.#insertPosition();
		}

		get flipped(): boolean {
			return this.#isFlipped;
		}

		set flipped(isFlipped: boolean) {
			this.#isFlipped = isFlipped;
			this.#insertPosition();
		}

		get fontMap(): FontMap {
			return this.#fontMap;
		}

		set fontMap(fontMap: FontMap) {
			this.#fontMap = fontMap;
			this.#insertPosition();
		}

		attributeChangedCallback(name: string, oldValue: any, newValue: any) {
			if (newValue === oldValue) {
				return;
			}

			if (name === "fen") {
				this.fen = newValue;
				return;
			}

			if (name === "flipped") {
				const validValues = ["flipped", ""];
				const isFlipped = validValues.includes(newValue?.toLowerCase());
				this.flipped = isFlipped;
				return;
			}
		}
	};
