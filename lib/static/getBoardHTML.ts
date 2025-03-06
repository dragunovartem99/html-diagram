export function getBoardHTML() {
	const board = Array.from({ length: 64 }, () => document.createElement("div"));
	return board;
}
