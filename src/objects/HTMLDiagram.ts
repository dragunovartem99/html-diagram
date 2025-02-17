import type { FenRecord, FontMap, IHTMLDiagram } from "../types";

import { defaultFontMap } from "../static/defaultFontMap";
import { getBoardHTML } from "../static/getBoardHTML";
import { getBoardCSS } from "../static/getBoardCSS";

import { Enigma } from "./Enigma";

// This encapsulates user's font map in class returned
export default (fontMap: FontMap = defaultFontMap) =>
	class extends HTMLElement implements IHTMLDiagram {
		static observedAttributes = ["fen"];

		#fontMap = fontMap;
		#fen: FenRecord = "8/8/8/8/8/8/8/8";
		#position!: HTMLSpanElement;

		constructor() {
			super();
			this.attachShadow({ mode: "open" });
		}

		connectedCallback() {
			const { shadowRoot } = this;
			const { svg: board, span: position } = getBoardHTML();

			shadowRoot!.appendChild(board);
			shadowRoot!.adoptedStyleSheets.push(getBoardCSS());

			this.#position = position;
			this.#setPosition();
		}

		#setPosition() {
			if (!this.#position) return;

			const notation = new Enigma(this.#fontMap).encode(this.#fen);
			this.#position.textContent = notation;
		}

		get fen(): FenRecord {
			return this.#fen;
		}

		set fen(fen: FenRecord) {
			this.#fen = fen;
			this.#setPosition();
		}

		get fontMap(): FontMap {
			return this.#fontMap;
		}

		set fontMap(fontMap: FontMap) {
			this.#fontMap = fontMap;
			this.#setPosition();
		}

		// @ts-ignore
		attributeChangedCallback(name, _, newValue: string) {
			this.fen = newValue;
		}
	};
