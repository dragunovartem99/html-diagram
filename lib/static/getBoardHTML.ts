export function getBoardHTML() {
	const parent = document.createElement("div");
	const child = document.createElement("div");

	parent.appendChild(child);

	return { parent, child }
}
