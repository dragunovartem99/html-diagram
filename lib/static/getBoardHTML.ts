export function getBoardHTML() {
	const svgNS = "http://www.w3.org/2000/svg";

	const svg = document.createElementNS(svgNS, "svg");

	svg.setAttribute("version", "1.1");
	svg.setAttribute("viewBox", "0 0 64 64");

	// Array of y positions for the <text> elements
	const yPositions = [8, 16, 24, 32, 40, 48, 56, 64];

	// Create and append <text> elements
	yPositions.forEach((y) => {
		const text = document.createElementNS(svgNS, "text");
		text.setAttribute("y", y.toString());
		svg.appendChild(text);
	});

	return { board: svg }
}
