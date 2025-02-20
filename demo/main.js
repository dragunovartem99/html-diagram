// Lib
import { HTMLDiagram } from "../lib";

// Demo
import "./css/style.css";
import { fonts } from "./scripts/fonts";
import { renderFontOptions } from "./scripts/renderFontOptions";
import { setTypography } from "./scripts/setTypography";
import { watchTV } from "./scripts/watchTV";
import { watchBronstein } from "./scripts/watchBronstein";

{
	// Lib: Usage
	customElements.define("my-diagram", HTMLDiagram);
}

{
	// Demo: Typography select
	const typography = document.querySelector("#typography");
	renderFontOptions(fonts.supported, typography);

	//if (import.meta.env.MODE === "development") {
	//	const optgroup = document.createElement("optgroup");
	//	optgroup.label = "Development";
	//	renderFontOptions(fonts.unsupported, optgroup);
	//	typography.appendChild(optgroup);
	//}

	setTypography(typography.value);
	typography.addEventListener("change", ({ target }) => setTypography(target.value));
}

{
	// Demo: Lichess stream
	function setGameInfo({ players, isFlipped, figure }) {
		let [black, white] = figure.querySelectorAll(".player");

		if (isFlipped) {
			[black, white] = [white, black];
		}

		white.classList.remove("accent");
		black.classList.add("accent");

		white.textContent = players[0].user.name;
		black.textContent = players[1].user.name;
	}

	watchTV(({ t: type, d: data }) => {
		const figure = document.querySelector("figure#live");
		const diagram = figure.querySelector("my-diagram");

		diagram.fen = data.fen;

		if (type === "featured") {
			const isFlipped = data.orientation === "black" ? "flipped" : null;

			diagram.flipped = isFlipped;
			setGameInfo({ ...data, isFlipped, figure });
		}
	});
}

{
	// Demo: Bronstein
	watchBronstein(({ d: data }) => {
		const figure = document.querySelector("figure#bronstein");
		const diagram = figure.querySelector("my-diagram");
		diagram.fen = data.fen;
	});
}
