export function getMask(pieceSymbol: string) {
	return { K: "0", Q: "1", R: "2", B: "3", N: "4", P: "5" }[pieceSymbol.toUpperCase()] || "+";
}
