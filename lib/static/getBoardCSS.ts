const css = `
	:host {
		display: block;
		position: relative;
	}
	svg {
		display: block;
		font-family: var(--diagram-font);
	}
	text {
		font-size: 8px;
		fill: var(--diagram-stroke, #000);
		dominant-baseline: text-before-edge;
	}
	svg + svg {
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background:
			repeating-conic-gradient(
				var(--diagram-light, white) 0% 25%,
				var(--diagram-dark, gray) 0% 50%
			)
			100% 0% / 25% 25%;
	}
	svg + svg text {
		fill: var(--diagram-fill, #fff);
	}
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
