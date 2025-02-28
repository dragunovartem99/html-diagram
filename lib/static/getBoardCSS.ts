const css = `
	:host {
		display: block;
		container-type: inline-size;
		position: relative;
	}
	:host > * {
		line-break: anywhere;
		white-space: break-spaces;
		font-family: var(--diagram-font);
		line-height: 1;
		font-size: 12.5cqw;
		aspect-ratio: 1 / 1;
		letter-spacing: -0.01cqw;
	}
	.board {
		color: #000;
	}
	.masks {
		color: #fff;
		position: absolute;
		inset: 0;
		z-index: -1;
		background: 
			repeating-conic-gradient(lightsteelblue 0% 25%, snow 0% 50%) 
				50% / 25% 25%;
	}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
