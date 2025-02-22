const css = `
:host { display: block; }
.root { container-type: inline-size; }
.board {
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
.board:before,
.board:after {
	text-align: start;
	font-size: 6cqw;
	font-family: "Goudy Bookletter 1911";
	white-space: nowrap;
	display: block;
}
.board:before,
.board:after {
	content: "abcdefgh";
	padding-inline-start: var(--diagram-files-start, 5.5cqw);
	letter-spacing: var(--diagram-files-gap, 9.9cqw);
}
.board:before { margin-bottom: var(--diagram-files-shift, 1.2cqw); }
.board:after { margin-top: var(--diagram-files-shift, 1cqw); } 
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
