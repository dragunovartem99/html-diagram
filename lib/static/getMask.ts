import { MaskMap } from "../types";

export function getMaskMap(): MaskMap {
	return new Map([
		["K", "0"],
		["Q", "1"],
		["R", "2"],
		["B", "3"],
		["N", "4"],
		["P", "5"]
	]);
}
