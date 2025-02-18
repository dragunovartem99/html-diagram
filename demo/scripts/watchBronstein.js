const game = [
	"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
	"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
	"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
	"rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
	"rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
	"rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
	"rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4",
	"rnbqkb1r/pppp1ppp/5n2/4P3/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4",
	"rnbqkb1r/pppp1ppp/8/4P3/5pn1/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5",
	"rnbqkb1r/pppp1ppp/8/4P3/3P1pn1/5N2/PPP3PP/RNBQKB1R b KQkq - 0 5",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 6",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP3PP/R1BQKB1R w KQkq - 2 7",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP1Q1PP/R1B1KB1R b KQkq - 3 7",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N2N2/PPP1Q1PP/R1B1Kn1R w KQkq - 0 8",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/5N2/PPP1Q1PP/R1B1Kn1R b KQkq - 1 8",
	"rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/4nN2/PPP1Q1PP/R1B1K2R w KQkq - 2 9",
	"rnbqkb1r/pppp1p1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R b KQkq - 3 9",
	"rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R w KQ - 4 10",
	"rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPPBQ1PP/R3K2R b KQ - 5 10",
	"rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQ1PP/R3K2R w KQ - 0 11",
	"rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQKPP/R6R b - - 1 11",
	"rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 0 12",
	"rnbq1b1r/ppppkp1p/8/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R b - - 1 12",
	"rnbq1b1r/pppp1p1p/4k3/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 2 13",
	"rnbq1b1r/pppp1p1p/4k3/3NP1p1/2QP1p2/5N2/PP1B1KPP/n6R b - - 3 13",
	"rnbq1b1r/p1pp1p1p/4k3/1p1NP1p1/2QP1p2/5N2/PP1B1KPP/n6R w - - 0 14",
	"rnbq1b1r/p1pp1p1p/4k3/1p1NP1N1/2QP1p2/8/PP1B1KPP/n6R b - - 0 14",
	"rnb2b1r/p1pp1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 0 15",
	"rnb2b1r/p1Np1p1p/4k3/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R b - - 0 15",
	"rnb2b1r/p1Npkp1p/8/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R w - - 1 16",
	"rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R b - - 2 16",
	"rnb2b1r/p2p1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 3 17",
	"rnb2b1r/p2p1p1p/4k3/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R b - - 0 17",
	"rnb2b1r/p2pkp1p/8/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R w - - 1 18",
	"rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R b - - 2 18",
	"rnb1kb1r/p2p1p1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R w - - 3 19",
	"rnQ1kb1r/p2p1p1p/8/1p1NP1q1/3P4/8/PP1B1KPP/n6R b - - 0 19",
	"rnQqkb1r/p2p1p1p/8/1p1NP3/3P4/8/PP1B1KPP/n6R w - - 1 20",
	"rnQqkb1r/p1Np1p1p/8/1p2P3/3P4/8/PP1B1KPP/n6R b - - 2 20",
	"rnQq1b1r/p1Npkp1p/8/1p2P3/3P4/8/PP1B1KPP/n6R w - - 3 21",
	"rnQq1b1r/p1Npkp1p/8/1p2P3/1B1P4/8/PP3KPP/n6R b - - 4 21",
	"rnQq1b1r/p1N1kp1p/3p4/1p2P3/1B1P4/8/PP3KPP/n6R w - - 0 22",
	"rnQq1b1r/p1N1kp1p/3B4/1p2P3/3P4/8/PP3KPP/n6R b - - 0 22",
	"rnQ2b1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R w - - 0 23",
	"rn2Qb1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R b - - 1 23",
];

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay() {
	const { random: rnd } = Math;

	const result = rnd();

	if (result < 0.05)
		return rnd() * 200; // premove-like
	else if (result < 0.1)
		return rnd() * 1000 + 2000; // deep thought
	else if (result < 0.35)
		return rnd() * 600 + 900; // solid
	else return rnd() * 600 + 300; // confident
}

export async function watchBronstein(onFrame) {
	for (const position of game) {
		onFrame({ d: { fen: position } });
		await delay(randomDelay());
	}
}
