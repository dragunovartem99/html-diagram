import { bronsteinsGame } from "../static/bronsteinsGame";

function getHumanLikeDelay() {
	const { random } = Math;

	const x = random();
	const range = (min, potential) => min + random() * potential;

	if (x < 0.05) {
		// premove-like - 5%
		return range(0, 200);
	} else if (x < 0.1) {
		// deep thought - 5%
		return range(2000, 1000);
	} else if (x < 0.35) {
		// solid - 25%
		return range(900, 600);
	}
	// confident - 65%
	return range(300, 600);
}

const wait = (ms) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

export async function watchBronstein(onFrame) {
	for (const position of bronsteinsGame) {
		onFrame({ d: { fen: position } });
		// eslint-disable-next-line no-await-in-loop -- frames must play back sequentially with delays
		await wait(getHumanLikeDelay());
	}
}
