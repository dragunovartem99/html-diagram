// @vitest-environment jsdom

import { expect, it } from "vitest";

import { Board } from "./Board";
import { IBoard } from "../types";

const extractIterableFen = (board: IBoard) => {
	return board.html.map((el) => {
		const piece = el.getAttribute("is");
		return piece ?? " ";
	});
};

it("Generates squares internally", () => {
	const board = new Board();
	expect(board.html).toHaveLength(64);
});

it("Sets the fen", () => {
	const fen = "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2";
	const board = new Board();

	board.fen = fen;

	// prettier-ignore
	const sicilianSnapshot = [
		"r", "n", "b", "q", "k", "b", "n", "r",
		"p", "p", " ", "p", "p", "p", "p", "p",
		" ", " ", " ", " ", " ", " ", " ", " ",
		" ", " ", "p", " ", " ", " ", " ", " ",
		" ", " ", " ", " ", "P", " ", " ", " ",
		" ", " ", " ", " ", " ", " ", " ", " ",
		"P", "P", "P", "P", " ", "P", "P", "P",
		"R", "N", "B", "Q", "K", "B", "N", "R",
	];

	expect(extractIterableFen(board)).toEqual(sicilianSnapshot);
});

it("Flips the board", () => {
	const fen = "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2";
	const board = new Board();

	board.fen = fen;
	const iterableFen = extractIterableFen(board);

	board.flipped = true;
	const reversedIterableFen = extractIterableFen(board);

	expect(iterableFen.reverse()).toEqual(reversedIterableFen);
});
