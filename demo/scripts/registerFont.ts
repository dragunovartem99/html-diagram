export function registerFont(font: string) {
	const stylesheet = new CSSStyleSheet();

	const fontFamily = `Chess ${font}`;
	const fontPath = `demo/fonts/chess-${font.toLowerCase()}.ttf`

	stylesheet.insertRule(`@font-face { font-family: "${fontFamily}"; src: url(${fontPath}) }`)

	document.adoptedStyleSheets.push(stylesheet);
}
