import './css/style.css'

import { readNdJson } from './readNdJson.ts'
import { ChessNewspaper } from './objects/ChessNewspaper.ts'
import { commonMap } from './common-map.ts'

class MyDiagram extends ChessNewspaper {
  constructor() {
    super();
    this._fontMap = commonMap;
  }
}

customElements.define("my-diagram", MyDiagram);

const typography = document.querySelector("#typography")!;

typography.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;
  document.querySelector("#app")!.className = target.value;
});

type Message = { t: "featured" | "fen", d: any; };

const onMessage = ({ t: type, d: data }: Message) => {
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
};

const stream = fetch('https://lichess.org/api/tv/feed');
stream.then(readNdJson(onMessage));
