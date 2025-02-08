import type { IHTMLDiagram } from "../src/types";
import standardFontMap from "../src/static/standard-font-map";
import nonStandardMaps from "./non-standard-maps.ts";

export function useTypography(font: string) {
	const diagrams: NodeListOf<IHTMLDiagram> = document.querySelectorAll("my-diagram");

	diagrams.forEach((diagram) => updateFontMap(diagram, font));
	setAppStyle(font);
}

function updateFontMap(diagram: IHTMLDiagram, font: string) {
	const isNonStandard = nonStandardMaps.has(font);
	const map = isNonStandard ? nonStandardMaps.get(font) : standardFontMap;

	if (diagram.fontMap !== map) {
		diagram.fontMap = map;
	}
}

function setAppStyle(font: string) {
	document.querySelector("#app")!.setAttribute("style", `--diagram-font: Chess ${font}`);
}
