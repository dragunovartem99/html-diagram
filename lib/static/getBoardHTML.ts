export function getBoardHTML() {
	const root = document.createElement("div");
	const board = document.createElement("div");

	root.classList.add("root");
	board.classList.add("board");

	root.appendChild(board);

	return { parent: root, child: board }
}
