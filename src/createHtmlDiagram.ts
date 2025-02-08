import standardFontMap from "./static/standard-font-map";
import { HTMLDiagram } from "./objects/HTMLDiagram";

export function defineHtmlDiagram(elementName: string, fontMap = standardFontMap) {
	customElements.define(
		elementName,
		class extends HTMLDiagram {
			constructor() {
				super();
				this._fontMap = fontMap;
			}
		},
	);
}
