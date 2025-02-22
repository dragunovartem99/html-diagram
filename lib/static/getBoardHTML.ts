export function getBoardHTML() {
	const files = document.createElement("div");
	const ranks = document.createElement("div");
	const position = document.createElement("div");

	files.classList.add("files");
	ranks.classList.add("ranks");
	position.classList.add("position");

	ranks.appendChild(position);
	files.appendChild(ranks);

	return { parent: files, child: position };
}
