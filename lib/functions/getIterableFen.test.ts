import { test, expect } from "vitest";
import { getIterableFen } from "./getIterableFen";

// The contract is: you enter the valid FEN, at least piece placement data

test("Returns 64 squares for starting position", () => {
	const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
	const iterableFen = getIterableFen({ fen });
	expect(iterableFen.length).toBe(64);
});

test('Ignores "9th rank" (e.g. crazyhouse)', () => {
	// https://lichess.org/analysis/crazyhouse?fen=r1bqr1k1/p1p2ppp/2p2p2/3p4/3P4/8/PPPNNPPP/R2QK2R/NNBpbb%20w%20KQ%20-%202%2010
	const fen = "r1bqr1k1/p1p2ppp/2p2p2/3p4/3P4/8/PPPNNPPP/R2QK2R/NNBpbb w KQ - 2 10"; // NNBpbb is "9th rank"
	const iterableFen = getIterableFen({ fen });
	expect(iterableFen.length).toBe(64);
});

test("Expands empty squares correctly", () => {
	const fen = "8/8/8/8/8/8/8/8"; // empty board
	const iterableFen = getIterableFen({ fen });
	expect(iterableFen.every((square) => square === " ")).toBe(true);
});

test("Reverses FEN correctly", () => {
	const fen = "2rqr1k1/5pb1/1p1p1np1/p1nPp2p/2P5/4BP2/PP1NB1PP/3QRR1K w - - 2 19";
	const iterableFen = getIterableFen({ fen });
	const reversedIterableFen = getIterableFen({ fen, reversed: true });

	expect([...iterableFen].reverse()).toEqual(reversedIterableFen);
});

test("Returns correct value for complex position", () => {
	const fen = "r2qr1k1/2pb1pp1/pb1p1nnp/1p2p3/P2PP3/2P2NNP/1PB2PP1/R1BQR1K1 b - - 0 15";
	const iterableFen = getIterableFen({ fen });

	// prettier-ignore
	// https://lichess.org/RoHsVV05#29
	const snapshot = [
		"r", " ", " ", "q", "r", " ", "k", " ",
		" ", " ", "p", "b", " ", "p", "p", " ",
		"p", "b", " ", "p", " ", "n", "n", "p",
		" ", "p", " ", " ", "p", " ", " ", " ",
		"P", " ", " ", "P", "P", " ", " ", " ",
		" ", " ", "P", " ", " ", "N", "N", "P",
		" ", "P", "B", " ", " ", "P", "P", " ",
		"R", " ", "B", "Q", "R", " ", "K", " ",
	];

	expect(iterableFen).toEqual(snapshot);
});
