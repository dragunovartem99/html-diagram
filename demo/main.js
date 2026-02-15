// Lib
import { HTMLDiagram } from "../lib";

// Demo
import "./css/style.css";
import { fonts } from "./static/fonts";
import { renderFontOptions } from "./scripts/renderFontOptions";
import { setTypography } from "./scripts/setTypography";
import { watchTV } from "./scripts/watchTV";
import { watchBronstein } from "./scripts/watchBronstein";

{
	// Lib: Usage
	customElements.define("demo-diagram", HTMLDiagram);
}

{
	// Demo: Typography select
	const typography = document.querySelector("#typography");
	renderFontOptions(fonts, typography);

	typography.value = "Leipzig";
	setTypography(typography.value);

	typography.addEventListener("change", ({ target }) => setTypography(target.value));
}

{
	// Demo: Colored mode
	const checkbox = document.querySelector("#colored");

	function setColored(isColored) {
		document
			.querySelectorAll("demo-diagram")
			.forEach((diagram) =>
				isColored
					? diagram.setAttribute("colored", "colored")
					: diagram.removeAttribute("colored")
			);
	}

	setColored(checkbox.checked);
	checkbox.addEventListener("change", ({ target }) => setColored(target.checked));
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
		const diagram = figure.querySelector("demo-diagram");

		diagram.setAttribute("fen", data.fen);

		if (type === "featured") {
			const isFlipped = data.orientation === "black";

			if (isFlipped) {
				diagram.setAttribute("flipped", "flipped");
			} else {
				diagram.removeAttribute("flipped");
			}

			setGameInfo({ ...data, isFlipped, figure });
		}
	});
}

{
	// Demo: Bronstein
	watchBronstein(({ d: data }) => {
		const figure = document.querySelector("figure#bronstein");
		const diagram = figure.querySelector("demo-diagram");
		diagram.setAttribute("fen", data.fen);
	});
}
