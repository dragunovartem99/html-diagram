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
		#domNode!: HTMLSpanElement;

		constructor() {
			super();
			this.attachShadow({ mode: "open" });
		}

		connectedCallback() {
			const { shadowRoot } = this;

			shadowRoot!.appendChild(getBoardHTML());
			shadowRoot!.adoptedStyleSheets.push(getBoardCSS());

			this.#domNode = this.shadowRoot!.querySelector("span")!;
			this.#setPosition();
		}

		#setPosition() {
			if (!this.#domNode) return;

			const notation = new Enigma(this.#fontMap).encode(this.#fen);
			this.#domNode.textContent = notation;
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
