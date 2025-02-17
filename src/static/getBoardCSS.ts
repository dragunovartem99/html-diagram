const css = `
svg {
	display: block;
	width: 100%;
	line-height: 0;
}
span {
	line-break: anywhere;
	white-space: break-spaces;

	color: var(--diagram-color);
	font-size: var(--diagram-font-size, 10px);
	font-family: var(--diagram-font-family);
	line-height: var(--diagram-line-height, 1);
}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
