const css = `
div {
	aspect-ratio: 1 / 1;
	line-height: 1;
	font-size: 12.5cqw;
	line-break: anywhere;
	white-space: break-spaces;
	text-align: center;
	user-select: none;
	font-family: var(--diagram-font);
	color: var(--diagram-color, black);
	letter-spacing: var(--diagram-spacing, -0.1cqw);
}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.insertRule(css);
	return sheet;
}
