import boardStyles from "../static/board-styles";
import standardFontMap from "../static/standard-font-map";

import type { IHTMLDiagram } from "../types";

import type { FenRecord, FontMap } from "../types";
import { Enigma } from "./Enigma";
import { Caricature } from "./Caricature";

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
			const sheet = new CSSStyleSheet();
			sheet.replaceSync(boardStyles);
			this.shadowRoot!.adoptedStyleSheets = [sheet];
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

		set fontMap(fontMap: FontMap) {
			this.#fontMap = fontMap;
			this.#render();
		}

		// @ts-ignore
		attributeChangedCallback(name, _, newValue: string) {
			this.fen = newValue;
		}
	};
