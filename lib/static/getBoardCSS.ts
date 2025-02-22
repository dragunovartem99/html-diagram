const css = `
	:host {
		display: block;
		--diagram-files-content: "abcdefgh";
		--diagram-ranks-content: "87654321";
	}
	:host([flipped]) { --diagram-files-content: "hgfedcba"; --diagram-ranks-content: "12345678"; }
	:host([coords~=left   i]) .ranks:before { content: var(--diagram-ranks-content); }
	:host([coords~=top    i]) .files:before { content: var(--diagram-files-content); }
	:host([coords~=right  i]) .ranks:after { content: var(--diagram-ranks-content); }
	:host([coords~=bottom i]) .files:after { content: var(--diagram-files-content); }
	.position {
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
	*:before, *:after {
		display: block;
		text-align: start;
		white-space: nowrap;
		color: var(--diagram-coords-color, var(--diagram-color));
		font-family: var(--diagram-coords-font);
		font-size: var(--diagram-coords-size, 6.25cqw);
		text-transform: var(--diagram-coords-capitalize, lowercase);
	}
	.files {
		container-type: inline-size;
		line-height: 1;
	}
	.files:before, .files:after {
		padding-inline-start: var(--diagram-files-start);
		letter-spacing: var(--diagram-files-gap);
		font-size: var(--diagram-files-size, var(--diagram-coords-size));
	}
	.files:before { margin-bottom: var(--diagram-files-offset); }
	.files:after { margin-top: var(--diagram-files-offset); }
	.ranks {
		border: var(--diagram-border);
		container-type: inline-size;
	}
	.ranks:before, .ranks:after {
		position: absolute;
		top: 0;
		writing-mode: vertical-rl;
		text-orientation: upright;
		padding-inline-start: var(--diagram-ranks-start);
		letter-spacing: var(--diagram-ranks-gap);
		font-size: var(--diagram-ranks-size, var(--diagram-coords-size));
	}
	.ranks:before { left: calc(var(--diagram-ranks-offset, 0cqw) * -1); }
	.ranks:after { right: calc(var(--diagram-ranks-offset, 0cqw) * -1); }
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
