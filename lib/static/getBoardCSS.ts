const css = `
	:host {
		display: block;
	}
	svg {
		font-family: var(--diagram-font);
		user-select: none;
	}
	text {
		font-size: 8px;
		fill: var(--diagram-stroke, #000);
	}
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
