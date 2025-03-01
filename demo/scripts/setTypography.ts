import { FontName } from "./types";

function registerFontFamily(font: FontName) {
	const stylesheet = new CSSStyleSheet();

	const fullName = `Diagram${font}`;
	const dirName = `./fonts/${fullName}`;
	const fileName = `${fullName}.woff2`;

	stylesheet.insertRule(
		`@font-face { font-family: "Diagram ${font}"; src: url("${dirName}/${fileName}"); font-display: block; }`
	);

	document.adoptedStyleSheets.push(stylesheet);
}

function setAppStyle(font: FontName) {
	const app = document.querySelector("#app")!;

	let style = `--diagram-font: Diagram ${font};`;

	if (font === "Assistant") {
		style += " --diagram-spacing: -0.4cqw";
	}

	app.setAttribute("style", style);
}

export function setTypography(font: FontName) {
	registerFontFamily(font);
	setAppStyle(font);
}
