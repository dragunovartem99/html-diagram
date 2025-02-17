export function registerFont(font: string) {
	const stylesheet = new CSSStyleSheet();

	const fontFamily = `Chess ${font}`;
	const fontFile = `chess-${font.toLowerCase().replace(" ", "-")}.ttf`;
	const fontPath = `demo/fonts/${fontFile}`;

	stylesheet.insertRule(`@font-face { font-family: "${fontFamily}"; src: url(${fontPath}) }`);

	document.adoptedStyleSheets.push(stylesheet);
}
