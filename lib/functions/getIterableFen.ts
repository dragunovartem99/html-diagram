import { FenRecord } from "../types";

type Options = {
	fen: FenRecord;
	reversed: boolean;
};

export function getIterableFen({ fen, reversed }: Options) {
	return reversed ? [...expandPiecePlecement(fen)].reverse() : [...expandPiecePlecement(fen)];
}

function expandPiecePlecement(fen: FenRecord) {
	return fen
		.split(" ")[0] // get piece placement
		.replace(/\//g, "") // remove slashes
		.replace(/\d/g, (digit) => "1".repeat(+digit)) // expand numbers, e.g. "5" => "11111"
		.slice(0, 64); // cut possible extra symbols (like Crazyhouse)
}
