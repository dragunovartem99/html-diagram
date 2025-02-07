import './css/style.css'

import type { TVFrame } from '../types';
import { HTMLDiagram } from '../objects/HTMLDiagram.ts';
import defaultFontMap from '../static/default-font-map.ts'
import { watchTV } from './watchTV.ts';

class MyDiagram extends HTMLDiagram {
  constructor() {
    super();
    this._fontMap = defaultFontMap;
  }
}

customElements.define("my-diagram", MyDiagram);

const typography = document.querySelector("#typography")!;

typography.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;
  document.querySelector("#app")!.className = target.value;
});

watchTV((frame: TVFrame) => {
  const { t: type, d: data } = frame;

  const live = document.querySelector("#live")!;
  const diagram: MyDiagram = live.querySelector("my-diagram")!;

  diagram.fen = data.fen;

  if (type === "featured") {
    const [white, black] = live.querySelectorAll(".player");
    const link: HTMLAnchorElement = live.querySelector("a")!;

    link.href = "https://lichess.org/" + data.id;
    white.textContent = data.players[0].user.name;
    black.textContent = data.players[1].user.name;
  }
})
