import { baseCSS } from "../static/baseCSS";
import { fontMap } from "../static/fontMap";
import { maskMap } from "../static/maskMap";

function generateCSS(): string {
	let css = "";

	for (const [key, { light, dark }] of fontMap) {
		const baseSelector = key === " " ? "div" : `[is=${key}]`;
		const darkSelector = key === " " ? "[dark]" : `[dark][is=${key}]`;

		css += `${baseSelector}::before { content: "${light}" }`;
		css += `${darkSelector}::before { content: "${dark}" }`;
		css += `:host([colored]) ${darkSelector}::before { content: "${light}" }`;
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
