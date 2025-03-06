const css = `
	:host {
		display: block;
		position: relative;
		container-type: inline-size;
	}
	:host > * {
		user-select: none;
		line-height: 1;
		font-size: var(--diagram-webkit-unit, 12.5cqw);
		font-family: var(--diagram-font);
	}
	:host([colored]) .masks {
		display: block;
	}
	.masks {
		display: none;
		position: absolute;
		inset: 0;
		z-index: -1;
		-webkit-text-stroke-width: var(--diagram-outline);
		color: var(--diagram-fill, white);
		background: repeating-conic-gradient(
			var(--diagram-dark, lightgray) 0% 25%,
			var(--diagram-light, white) 0% 50%
		) 50% / 25% 25%;
	}
	.board {
		color: var(--diagram-stroke, black);
	}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
