const css = `
div {
	text-align: center;

	line-break: anywhere;
	white-space: break-spaces;

	aspect-ratio: 1 / 1;
	line-height: 1;
	font-size: 12.5cqw;

	color: var(--diagram-color, black);
	font-family: var(--diagram-font);
	letter-spacing: var(--diagram-spacing, -0.1cqw);
}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.insertRule(css);
	return sheet;
}
