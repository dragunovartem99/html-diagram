import type { IHTMLDiagram } from "../../src/types";
import { standardFontMap } from "../../src/static/standardFontMap";
import customMaps from "./customMaps";

function setAppStyle(font: string) {
	document.querySelector("#app")!.setAttribute("style", `--diagram-font: Chess ${font}`);
}

function updateFontMap(diagram: IHTMLDiagram, font: string) {
	const map = customMaps.has(font) ? customMaps.get(font)! : standardFontMap;

	if (diagram.fontMap !== map) {
		diagram.fontMap = map;
	}
}

export function useTypography(font: string) {
	const diagrams: NodeListOf<IHTMLDiagram> = document.querySelectorAll("my-diagram");
	diagrams.forEach((diagram) => updateFontMap(diagram, font));
	setAppStyle(font);
}
