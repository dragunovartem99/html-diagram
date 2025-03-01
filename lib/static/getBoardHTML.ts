export function getBoardHTML() {
	const board = document.createElement("div");
	const masks = document.createElement("div");

	board.classList.add("board");
	masks.classList.add("masks");

	return { board, masks };
}
