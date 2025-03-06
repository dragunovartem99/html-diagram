const css = `
	:host {
		display: block;
		position: relative;
		container-type: inline-size;
	}
	.board, .masks {
		user-select: none;
		line-height: 1;
		font-size: var(--diagram-webkit-unit, 12.5cqw);
		font-family: var(--diagram-font);
	}
	.board { color: var(--diagram-stroke, #000); }
	.masks { display: none; }
	:host([colored]) .masks {
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		-webkit-text-stroke-width: var(--diagram-outline);
		color: var(--diagram-fill, #fff);
		background: repeating-conic-gradient(
			var(--diagram-dark, #bbb) 0% 25%,
			var(--diagram-light, #eee) 0% 50%
		) 50% / 25% 25%;
	}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
