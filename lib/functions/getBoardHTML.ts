export function getBoardHTML(): HTMLDivElement[] {
	return Array.from({ length: 64 }, (_: undefined, index: number) => {
		const square = document.createElement("div");

		const isDark = ((index * 9) & 8) !== 0;
		if (isDark) square.setAttribute("dark", "");

		return square;
	});
}
