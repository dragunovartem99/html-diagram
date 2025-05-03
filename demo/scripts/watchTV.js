import { readStream } from "../utils/readStream";

export function watchTV(onFrame) {
	const stream = fetch("https://lichess.org/api/tv/feed");

	const onMessage = (obj) => onFrame(obj);
	const onComplete = () => console.log("The stream has completed");

	stream.then(readStream(onMessage)).then(onComplete);
}
