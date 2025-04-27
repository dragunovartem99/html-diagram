import { getFontMap } from "./getFontMap";
import { getMaskMap } from "./getMaskMap";

let css = `
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

for (const [key, { light, dark }] of getFontMap()) {
	if (key === " ") {
		css += `div::before { content: "${light}" }`;
		css += `[dark]::before { content: "${dark}" }`;
		css += `:host([colored]) [dark]::before { content: "${light}" }`;
	} else {
		css += `[is=${key}]::before { content: "${light}" }`;
		css += `[dark][is=${key}]::before { content: "${dark}" }`;
		css += `:host([colored]) [dark][is=${key}]::before { content: "${light}" }`;
	}
}

for (const [key, mask] of getMaskMap()) {
	css += `:host([colored]) [is=${key}]::after { content: "${mask}" }`;
}

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
