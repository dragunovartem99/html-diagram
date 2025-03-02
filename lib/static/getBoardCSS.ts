const css = `
	:host {
		display: block;
		position: relative;
	}
	svg {
		font-family: var(--diagram-font);
		user-select: none;
	}
	svg + svg {
		position: absolute;
		inset: 0;
		z-index: -1;
	}
	text {
		font-size: 8px;
		fill: var(--diagram-stroke, #000);
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
