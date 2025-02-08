import standardFontMap from "./static/standard-font-map";
import { HTMLDiagram } from "./objects/HTMLDiagram";
import { FontMap } from "./types";

export function defineHtmlDiagram(elementName: string, fontMap: FontMap = standardFontMap) {
	customElements.define(elementName, HTMLDiagram(fontMap));
}
