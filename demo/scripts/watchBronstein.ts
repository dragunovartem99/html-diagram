import { bronsteinsGame } from "../static/bronsteinsGame";

function getHumanLikeDelay() {
	const { random } = Math;

	const x = random();
	const range = (min: number, potential: number) => min + random() * potential;

	if (x < 0.05) {
		return range(0, 200); // premove-like - 5%
	} else if (x < 0.1) {
		return range(2000, 1000); // deep thought - 5%
	} else if (x < 0.35) {
		return range(900, 600); // solid - 25%
	} else {
		return range(300, 600); // confident - 65%
	}
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function watchBronstein(onFrame: Function) {
	for (const position of bronsteinsGame) {
		onFrame({ d: { fen: position } });
		await wait(getHumanLikeDelay());
	}
}
