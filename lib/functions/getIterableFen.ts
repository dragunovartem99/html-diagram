import { FenRecord } from "../types";

type Options = {
	fen: FenRecord;
	reversed?: boolean;
};

export function getIterableFen({ fen, reversed }: Options): string[] {
	if (reversed) {
		return [...expandPiecePlecement(fen)].reverse();
	} else {
		return [...expandPiecePlecement(fen)];
	}
}

function expandPiecePlecement(fen: FenRecord): string {
	return fen
		.split(" ")[0] // get piece placement
		.replace(/\//g, "") // remove slashes
		.replace(/\d/g, (digit) => " ".repeat(+digit)) // use space for empty squares
		.slice(0, 64); // cut possible extra symbols (like Crazyhouse)
}
