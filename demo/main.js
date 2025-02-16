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
	// Demo: Lichess Stream
	watchTV(({ t: type, d: data }) => {
		const live = document.querySelector("#live");
		const diagram = live.querySelector("my-diagram");

		if (type === "featured") {
			const [white, black] = live.querySelectorAll(".player");
			const link = live.querySelector("a");

			link.href = "https://lichess.org/" + data.id;
			white.textContent = data.players[0].user.name;
			black.textContent = data.players[1].user.name;
		}

		diagram.fen = data.fen;
	});
}
