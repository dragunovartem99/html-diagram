const board = `
svg {
	display: block;
	width: 100%;
	line-height: 0;
}
`;

const position = `
span {
	line-break: anywhere;
	white-space: break-spaces;
	line-height: 1;

	color: var(--diagram-color, #000);
	font-size: var(--diagram-font-size, 10px);
	font-family: var(--diagram-font-family);
}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.insertRule(board);
	sheet.insertRule(position);
	return sheet;
}
