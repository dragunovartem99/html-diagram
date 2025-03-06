import { FenRecord } from "../types";

export function getIterableFen(fen: FenRecord) {
	return fen
		.split(" ")[0] // extract position
		.replace(/\//g, "")
		.replace(/\d/g, (digit) => "1".repeat(+digit)) // expand numbers, e.g. "3" => "111"
		.slice(0, 64) // cut possible extra symbols (e.g. Crazyhouse)
		.split(""); // convert to array
}
