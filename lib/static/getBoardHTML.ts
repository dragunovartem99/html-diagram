export function getBoardHTML() {
	const svgNS = "http://www.w3.org/2000/svg";

	const svg = document.createElementNS(svgNS, "svg");
	svg.setAttribute("version", "1.1");
	svg.setAttribute("viewBox", "0 0 64 64");

	const ranks = [];

	for (let y = 0; y < 64; y += 8) {
		const text = document.createElementNS(svgNS, "text");
		text.setAttribute("y", y.toString());
		text.setAttribute("textLength", "100%");
		text.setAttribute("lengthAdjust", "spacingAndGlyphs");
		ranks.push(text);
	}

	ranks.forEach((rank) => svg.appendChild(rank));

	return { svg, ranks };
}
