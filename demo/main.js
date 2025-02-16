// Lib
import { htmlDiagram } from "../src/lib";

// Demo
import "./css/style.css";
import { useTypography } from "./scripts/useTypography";
import { watchTV } from "./scripts/watchTV";

{
	// Lib: Usage
	customElements.define("my-diagram", htmlDiagram());
}

{
	// Demo: Typography select
	const typography = document.querySelector("#typography");
	useTypography(typography.value);
	typography.addEventListener("change", (event) => useTypography(event.target.value));
}

{
	// Demo: Lichess stream
	function setGameInfo({ gameId, players }) {
		const [white, black] = live.querySelectorAll(".player");
		const boardLink = live.querySelector("a");

		boardLink.href = `https://lichess.org/${gameId}`;

		white.textContent = players[0].user.name;
		black.textContent = players[1].user.name;
	}

	watchTV(({ t: type, d: data }) => {
		const { id: gameId, players, fen } = data;

		const live = document.querySelector("#live");
		const diagram = live.querySelector("my-diagram");

		diagram.fen = fen;

		if (type === "featured") {
			setGameInfo({ gameId, players });
		}
	});
}
