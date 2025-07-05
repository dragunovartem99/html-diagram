import { fontMap } from "../static/fontMap";
import { maskMap } from "../static/maskMap";
import { baseCSS } from "../static/baseCSS";

function generateCSS(): string {
	let css = "";

	for (const [key, { light, dark }] of fontMap) {
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

	for (const [key, mask] of maskMap) {
		css += `:host([colored]) [is=${key}]::after { content: "${mask}" }`;
	}

	return css;
}

export function getBoardCSS(): CSSStyleSheet {
	const sheet = new CSSStyleSheet();
	const css = baseCSS.concat(generateCSS());

	sheet.replaceSync(css);
	return sheet;
}
