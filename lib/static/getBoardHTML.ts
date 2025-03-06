export function getBoardHTML() {
	const board = Array.from({ length: 64 }, (_, index) => {
		const square = document.createElement("div");
		(index * 9) & 8 && square.setAttribute("dark", "");
		return square;
	});
	return board;
}
