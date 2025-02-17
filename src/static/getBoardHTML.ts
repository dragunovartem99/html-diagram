export function getBoardHTML() {
	const svgNS = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(svgNS, "svg");
	const foreignObject = document.createElementNS(svgNS, "foreignObject");
	const span = document.createElement("span");

	// svg > foreignObject > span
	foreignObject.appendChild(span);
	svg.appendChild(foreignObject);

	svg.setAttribute("viewBox", "0 0 80 80");
	foreignObject.setAttribute("width", "80");
	foreignObject.setAttribute("height", "80");

	return { svg, span };
}
