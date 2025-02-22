export function getBoardHTML() {
	const container = document.createElement("div");
	const board = document.createElement("div");

	container.classList.add("container");
	board.classList.add("board");

	container.appendChild(board);

	return { parent: container, child: board }
}
