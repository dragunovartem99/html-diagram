import type { FenRecord } from "../types";

type Options = {
	fen: FenRecord;
	reversed?: boolean;
};

export function getIterableFen({ fen, reversed }: Options): string[] {
	if (reversed) {
		return [...expandPiecePlecement(fen)].toReversed();
	}
	return [...expandPiecePlecement(fen)];
}

function expandPiecePlecement(fen: FenRecord): string {
	// Get piece placement, remove slashes, use space for empty squares,
	// and cut possible extra symbols (like Crazyhouse).
	return fen
		.split(" ")[0]
		.replaceAll("/", "")
		.replaceAll(/\d/gu, (digit) => " ".repeat(+digit))
		.slice(0, 64);
}
