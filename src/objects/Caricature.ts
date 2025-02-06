import { FigurineNotation, ICaricature } from "../types";

export class Caricature implements ICaricature {
  #notation;

  constructor(notation: FigurineNotation) {
    this.#notation = notation;
  }

  create() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    const foreignObject = document.createElementNS(svgNS, "foreignObject");
    const span = document.createElement("span");

    svg.setAttribute("viewBox", "0 0 80 80");
    foreignObject.setAttribute("x", "0");
    foreignObject.setAttribute("y", "0");
    foreignObject.setAttribute("width", "80");
    foreignObject.setAttribute("height", "80");

    span.textContent = this.#notation;
    foreignObject.appendChild(span);
    svg.appendChild(foreignObject);
    return svg;
  }
}
