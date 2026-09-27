import { baseCSS } from "../static/baseCSS";
import { fontMap } from "../static/fontMap";
import { maskMap } from "../static/maskMap";

function generateCSS(): string {
	let css = "";

	for (const [key, { light, dark }] of fontMap) {
		const is = key === " " ? "" : `[is=${key}]`;

		css += `${is || "div"}::before { content: "${light}" }`;
		css += `[dark]${is}::before { content: "${dark}" }`;
		css += `:host([colored]) [dark]${is}::before { content: "${light}" }`;
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
