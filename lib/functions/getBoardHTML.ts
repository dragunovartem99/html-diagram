export function getBoardHTML() {
	const board = Array.from({ length: 64 }, (_, index) => {
		const square = document.createElement("div");

		const isDark = ((index * 9) & 8) !== 0;
		if (isDark) square.setAttribute("dark", "");

		return square;
	});
	return board;
}
