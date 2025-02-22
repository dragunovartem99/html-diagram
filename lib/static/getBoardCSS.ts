function getBaseCSS() {
	return `
		:host { display: block; box-sizing: border-box; }
		.container { container-type: inline-size; line-height: 1; }
		.board {
			position: relative;
			aspect-ratio: 1 / 1;
			font-size: 12.5cqw;
			line-break: anywhere;
			white-space: break-spaces;
			text-align: center;
			user-select: none;
			font-family: var(--diagram-font);
			letter-spacing: var(--diagram-spacing, -0.1cqw);
			color: var(--diagram-color);
		}
	`;
}

function getCoordsCSS() {
	return `
		:host {
			--diagram-files-content: "abcdefgh";
			--diagram-ranks-content: "87654321";
		}
		:host([flipped]) {
			--diagram-files-content: "hgfedcba";
			--diagram-ranks-content: "12345678";
		}
		*:before, *:after {
			display: block;
			text-align: start;
			white-space: nowrap;
			color: var(--diagram-coords-color, var(--diagram-color));
			font-family: var(--diagram-coords-font);
			font-size: var(--diagram-coords-size, 6.25cqw);
			text-transform: var(--diagram-coords-capitalize, lowercase);
		}
		.container:before,
		.container:after {
			content: var(--diagram-files-content);
			padding-inline-start: var(--diagram-files-start);
			letter-spacing: var(--diagram-files-gap);
			font-size: var(--diagram-files-size, var(--diagram-coords-size));
		}
		.board:before,
		.board:after {
			content: var(--diagram-ranks-content);
			position: absolute;
			top: 0;
			writing-mode: vertical-rl;
			text-orientation: upright;
			padding-inline-start: var(--diagram-ranks-start);
			letter-spacing: var(--diagram-ranks-gap);
			font-size: var(--diagram-ranks-size, var(--diagram-coords-size));
		}
		.container:before { margin-bottom: var(--diagram-files-shift); }
		.container:after { margin-top: var(--diagram-files-shift); } 
		.board:before { left: calc(var(--diagram-ranks-shift, 0cqw) * -1); }
		.board:after { right: calc(var(--diagram-ranks-shift, 0cqw) * -1); } 
	`;
}

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(getBaseCSS() + getCoordsCSS());
	return sheet;
}
