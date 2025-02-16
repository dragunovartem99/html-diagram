import type { IHTMLDiagram } from "../../src/types";
import standardFontMap from "../../src/static/standardFontMap";
import customMaps from "./customMaps.ts";

export function useTypography(font: string) {
	const diagrams: NodeListOf<IHTMLDiagram> = document.querySelectorAll("my-diagram");

	diagrams.forEach((diagram) => updateFontMap(diagram, font));
	setAppStyle(font);
}

function updateFontMap(diagram: IHTMLDiagram, font: string) {
	const isCustom = customMaps.has(font);
	const map = isCustom ? customMaps.get(font) : standardFontMap;

	if (diagram.fontMap !== map) {
		diagram.fontMap = map;
	}
}

function setAppStyle(font: string) {
	document.querySelector("#app")!.setAttribute("style", `--diagram-font: Chess ${font}`);
}
