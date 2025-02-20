import type { FontName } from "../../lib/types";

function setAppStyle(font: FontName) {
	const app = document.querySelector("#app")!;

	if (font === "Assistant") {
		app.setAttribute("style", `--diagram-font: Diagram ${font}; --diagram-spacing: -0.4cqw`);
	} else {
		app.setAttribute("style", `--diagram-font: Diagram ${font}`);
	}
}

function registerFontFamily(font: FontName) {
	const stylesheet = new CSSStyleSheet();

	const fontFamily = `Diagram ${font}`;
	const fontFile = `diagram-${font.toLowerCase().replace(" ", "-")}.ttf`;

	stylesheet.insertRule(
		`@font-face { font-family: "${fontFamily}"; src: url("./woff2/${fontFile}"); font-display: block; }`
	);

	document.adoptedStyleSheets.push(stylesheet);
}

export function setTypography(font: FontName) {
	registerFontFamily(font);
	setAppStyle(font);
}
