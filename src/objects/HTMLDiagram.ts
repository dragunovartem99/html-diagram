import boardStyles from "../static/boardStyles";
import { standardFontMap } from "../static/standardFontMap";

import type { FenRecord, FontMap, IHTMLDiagram } from "../types";
import { Enigma } from "./Enigma";
import { Caricature } from "./Caricature";

// This encapsulates user's font map in class returned
export default (fontMap: FontMap = standardFontMap) =>
	class extends HTMLElement implements IHTMLDiagram {
		static observedAttributes = ["fen"];

		#fen: FenRecord = "8/8/8/8/8/8/8/8";
		#fontMap = fontMap;

		constructor() {
			super();
			this.attachShadow({ mode: "open" });
		}

		connectedCallback() {
			this.#setStyles();
			this.#render();
		}

		#setStyles() {
			this.shadowRoot!.adoptedStyleSheets = [boardStyles()];
		}

		#render() {
			const notation = new Enigma(this.#fontMap).encode(this.#fen);
			const graphic = new Caricature(notation).create();
			this.shadowRoot!.replaceChildren(graphic);
		}

		get fen(): FenRecord {
			return this.#fen;
		}

		set fen(fen: FenRecord) {
			this.#fen = fen;
			this.#render();
		}

		get fontMap(): FontMap {
			return this.#fontMap;
		}

		set fontMap(fontMap: FontMap) {
			this.#fontMap = fontMap;
			this.#render();
		}

		// @ts-ignore
		attributeChangedCallback(name, _, newValue: string) {
			switch (name) {
				case "fen":
					this.fen = newValue;
			}
		}
	};
