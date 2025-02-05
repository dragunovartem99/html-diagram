import './style.css'

import { HTMLDiagram } from './html-diagram.ts'
import { commonMap } from './common-map.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>HTML Diagram</h1>
    <my-diagram fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"></my-diagram>
  </div>
`

class MyDiagram extends HTMLDiagram {
  constructor() {
    super();
    this._map = commonMap;
  }
}

customElements.define("my-diagram", MyDiagram);
