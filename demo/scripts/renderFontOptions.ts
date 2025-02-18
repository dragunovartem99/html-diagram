import { FontName } from "../../lib/types";

export function renderFontOptions(fonts: FontName[], element: HTMLElement) {
	fonts.forEach((font) => {
		const option = document.createElement("option");
		option.textContent = font;
		element.appendChild(option);
	});
}
