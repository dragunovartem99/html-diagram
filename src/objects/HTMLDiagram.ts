import type { FenRecord, FontMap } from "../types";
import { Enigma } from "./Enigma";
import { Caricature } from "./Caricature";
import { Stylesheet } from "./Stylesheet";

export const HTMLDiagram = (fontMap: FontMap) =>
	class extends HTMLElement {
		static observedAttributes = ["fen"];

		#fen: FenRecord = "8/8/8/8/8/8/8/8";
		#fontMap: FontMap;

		constructor() {
			super();
			this.#fontMap = fontMap;
		}

		connectedCallback() {
			this.attachShadow({ mode: "open" });
			this.#setStyles();
			this.#render();
		}

		#setStyles() {
			new Stylesheet("../static/board-styles.ts").create().then((sheet) => {
				this.shadowRoot!.adoptedStyleSheets = [sheet];
			});
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
