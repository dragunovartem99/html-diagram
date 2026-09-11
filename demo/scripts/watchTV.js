import { readStream } from "../utils/readStream";

function onComplete() {
	console.log("The stream has completed");
}

export function watchTV(onFrame) {
	const stream = fetch("https://lichess.org/api/tv/feed");

	const onMessage = (obj) => onFrame(obj);

	stream.then(readStream(onMessage)).then(onComplete);
}
