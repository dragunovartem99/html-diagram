// Lib
import { htmlDiagram } from "../src/lib";

// Demo
import "./css/style.css";
import { registerFont } from "./scripts/registerFont";
import { setTypography } from "./scripts/setTypography";
import { watchTV } from "./scripts/watchTV";

{
	// Lib: Usage
	customElements.define("my-diagram", htmlDiagram());
}

{
	// Demo: Typography select
	const typography = document.querySelector("#typography");

	const useFont = (font) => registerFont(font) ?? setTypography(font);

	useFont(typography.value);

	typography.addEventListener("change", ({ target }) => useFont(target.value));
}

{
	// Demo: Lichess stream
	function setGameInfo({ id, players }) {
		const [white, black] = live.querySelectorAll(".player");
		const boardLink = live.querySelector("a");

		boardLink.href = `https://lichess.org/${id}`;

		white.textContent = players[0].user.name;
		black.textContent = players[1].user.name;
	}

	watchTV(({ t: type, d: data }) => {
		const live = document.querySelector("#live");
		const diagram = live.querySelector("my-diagram");

		diagram.fen = data.fen;

		if (type === "featured") {
			setGameInfo(data);
		}
	});
}
