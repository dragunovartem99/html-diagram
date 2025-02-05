export class HTMLDiagram extends HTMLElement {
  #fen = "8/8/8/8/8/8/8/8";
  _map!: Map<string, { light: string, dark: string }>;

  static observedAttributes = ["fen"];

  // @ts-ignore
  attributeChangedCallback(name, _, newValue) {
    this.#fen = newValue;
    this.#render();
  }

  #render() {
    this.textContent = this.#fen
      .split(" ")[0]
      .replace(/\//g, '')
      .replace(/\d/g, (digit) => ' '.repeat(+digit))
      .replace(/./g, (char, index) => {
        const entry = this._map.get(char);
        if (!entry) return char;

        const parity = (index + (index >> 3)) & 1;
        return entry[parity ? 'dark' : 'light'];
      });
  }

  get fen() {
    return this.#fen;
  }

  set fen(fen) {
    this.#fen = fen;
    this.#render();
  }
}

