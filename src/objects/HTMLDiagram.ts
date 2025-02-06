import type { FenRecord, FontMap } from "../types";
import { Enigma } from "./Enigma";
import { Caricature } from "./Caricature";
import { Stylesheet } from "./Stylesheet";

export class HTMLDiagram extends HTMLElement {
  static observedAttributes = ["fen"];

  #fen: FenRecord = "8/8/8/8/8/8/8/8";
  _fontMap!: FontMap;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#setStyles();
    this.#render();
  }

  #setStyles() {
    new Stylesheet("../boardStyles.ts").create().then((sheet) => {
      this.shadowRoot!.adoptedStyleSheets = [sheet];
    });
  }

  #render() {
    const notation = new Enigma(this._fontMap).encode(this.#fen);
    const graphic = new Caricature(notation).create();
    this.shadowRoot!.replaceChildren(graphic);
  }

  get fen(): FenRecord {
    return this.#fen;
  }

  set fen(fen: FenRecord) {
    this.#fen = fen;
    this.#render(); // side effect?
  }

  // @ts-ignore
  attributeChangedCallback(name, _, newValue: string) {
    this.fen = newValue;
  }
}
