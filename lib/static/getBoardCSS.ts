const css = `
	:host {
		display: block;
		container-type: inline-size;
		position: relative;
		aspect-ratio: 1 / 1;
	}
	.board, .masks {
		user-select: none;
		line-break: anywhere;
		white-space: break-spaces;
		line-height: 1;
		font-size: 12.5cqw;
		letter-spacing: -0.01cqw;
		font-family: var(--diagram-font);
	}
	.board { color: var(--diagram-stroke, #000); }
	.masks { display: none; }
	:host([colored]) .masks {
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		text-shadow: var(--diagram-shadow);
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
