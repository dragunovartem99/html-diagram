import type { FontName, IHTMLDiagram } from "../../lib/types";
import { defaultFontMap } from "../../lib/static/defaultFontMap";
import customFontMaps from "../custom-font-maps";

function setAppStyle(font: FontName) {
	const app = document.querySelector("#app")!;

	if (font === "Assistant") {
		app.setAttribute("style", `--diagram-font: Chess ${font}; --diagram-spacing: -0.4cqw`);
	} else {
		app.setAttribute("style", `--diagram-font: Chess ${font}`);
	}
}

function updateFontMap(diagram: IHTMLDiagram, font: FontName) {
	const fontMap = customFontMaps.has(font) ? customFontMaps.get(font)! : defaultFontMap;

	if (diagram.fontMap !== fontMap) {
		diagram.fontMap = fontMap;
	}
}

function updateFontMaps(font: FontName) {
	const diagrams: NodeListOf<IHTMLDiagram> = document.querySelectorAll("my-diagram");
	diagrams.forEach((diagram) => updateFontMap(diagram, font));
}

function registerFontFamily(font: FontName) {
	const stylesheet = new CSSStyleSheet();

	const fontFamily = `Chess ${font}`;
	const fontFile = `chess-${font.toLowerCase().replace(" ", "-")}.ttf`;

	stylesheet.insertRule(
		`@font-face { font-family: "${fontFamily}"; src: url("./fonts/${fontFile}"); font-display: block; }`
	);

	document.adoptedStyleSheets.push(stylesheet);
}

export function setTypography(font: FontName) {
	updateFontMaps(font);
	registerFontFamily(font);
	setAppStyle(font);
}
