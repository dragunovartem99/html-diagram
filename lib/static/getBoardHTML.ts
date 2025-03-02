export function getBoardHTML(bg?: boolean) {
	const svgNS = "http://www.w3.org/2000/svg";

	const svg = document.createElementNS(svgNS, "svg");
	svg.setAttribute("version", "1.1");
	svg.setAttribute("viewBox", "0 0 64 64");

	if (bg) {
		const pattern = document.createElementNS(svgNS, "pattern");
		pattern.setAttribute("id", "checkered");
		pattern.setAttribute("viewBox", "0 0 1 1");
		pattern.setAttribute("patternUnits", "userSpaceOnUse");
		pattern.setAttribute("width", "16");
		pattern.setAttribute("height", "16");

		const rect1 = document.createElementNS(svgNS, "rect");
		rect1.setAttribute("style", "fill: var(--diagram-light)");
		rect1.setAttribute("width", "1");
		rect1.setAttribute("height", "1");

		const path = document.createElementNS(svgNS, "path");
		path.setAttribute("style", "fill: var(--diagram-dark)");
		path.setAttribute("d", "M 0.5,0 V 1 H 0 V 0.5 H 1 V 0 Z");

		pattern.appendChild(rect1);
		pattern.appendChild(path);
		svg.appendChild(pattern);

		const rect2 = document.createElementNS(svgNS, "rect");
		rect2.setAttribute("width", "100%");
		rect2.setAttribute("height", "100%");
		rect2.setAttribute("style", "fill:url(#checkered)");
		svg.appendChild(rect2);
	}

	const ranks = [];

	for (let y = 8; y <= 64; y += 8) {
		const text = document.createElementNS(svgNS, "text");
		text.setAttribute("y", y.toString());
		ranks.push(text);
	}

	ranks.forEach((rank) => svg.appendChild(rank));

	return { svg, ranks };
}
