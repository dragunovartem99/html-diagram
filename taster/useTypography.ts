import type { IHTMLDiagram } from "../src/types";
import standardFontMap from "../src/static/standard-font-map";
import nonStandardMaps from "./non-standard-maps.ts";

export function useTypography(font: string) {
	document.querySelector("#app")!.setAttribute("style", `--diagram-font: Chess ${font}`);

	const diagrams: NodeListOf<IHTMLDiagram> = document.querySelectorAll("my-diagram");

	diagrams.forEach(
		(diagram) =>
			(diagram.fontMap = nonStandardMaps.has(font)
				? nonStandardMaps.get(font)
				: standardFontMap),
	);
}
