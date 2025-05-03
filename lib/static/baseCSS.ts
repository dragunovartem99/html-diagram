export const baseCSS = `
	:host {
		display: grid;
		container-type: inline-size;
		grid-template-columns: repeat(8, 1fr);
		grid-auto-rows: 1fr;
	}
	div {
		line-height: 1;
		user-select: none;
		font-family: var(--diagram-font);
		color: var(--diagram-stroke, black);
		font-size: var(--diagram-webkit-unit, 12.5cqw);
	}
	:host([colored]) div {
		position: relative;
		z-index: 0;
	}
	:host([colored]) div::after {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		color: var(--diagram-fill, white);
		background-color: var(--diagram-light, white);
		-webkit-text-stroke-width: var(--diagram-outline);
	}
	:host([colored]) [dark]::after {
		background: var(--diagram-dark, lightgray);
	}
`;
