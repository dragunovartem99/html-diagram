export function getBoardHTML() {
	const svgNS = "http://www.w3.org/2000/svg";

	const board = document.createElementNS(svgNS, "svg");

	board.setAttribute("version", "1.1");
	board.setAttribute("viewBox", "0 0 64 64");

	const ranks = [];

	for (let y = 8; y <= 64; y += 8) {
		const text = document.createElementNS(svgNS, "text");
		text.setAttribute("y", y.toString());
		ranks.push(text);
	}

	ranks.forEach((rank) => board.appendChild(rank));

	return { board, ranks };
}
