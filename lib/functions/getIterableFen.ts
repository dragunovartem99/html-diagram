import { FenRecord } from "../types";

type Options = {
	fen: FenRecord;
	reversed?: boolean;
};

export function getIterableFen({ fen, reversed }: Options) {
	return reversed ? [...expandPiecePlecement(fen)].reverse() : [...expandPiecePlecement(fen)];
}

function expandPiecePlecement(fen: FenRecord) {
	return fen
		.split(" ")[0] // get piece placement
		.replace(/\//g, "") // remove slashes
		.replace(/\d/g, (digit) => " ".repeat(+digit)) // use space for empty squares
		.slice(0, 64); // cut possible extra symbols (like Crazyhouse)
}
