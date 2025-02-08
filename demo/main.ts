import "./css/style.css";

import { defineHtmlDiagram } from "../src/createHtmlDiagram";
import { IHTMLDiagram } from "../src/types/index";

import { useTypography } from "./useTypography.ts";
import { watchTV } from "./watchTV.ts";

defineHtmlDiagram("my-diagram");

const typography: HTMLSelectElement = document.querySelector("#typography")!;

useTypography(typography.value);

typography.addEventListener("change", ({ target }) => {
	const { value: font } = target as HTMLSelectElement;
	useTypography(font);
});

watchTV((frame: any) => {
	const { t: type, d: data } = frame;

	const live = document.querySelector("#live")!;
	const diagram: IHTMLDiagram = live.querySelector("my-diagram")!;

	diagram.fen = data.fen;

	if (type === "featured") {
		const [white, black] = live.querySelectorAll(".player");
		const link: HTMLAnchorElement = live.querySelector("a")!;

		link.href = "https://lichess.org/" + data.id;
		white.textContent = data.players[0].user.name;
		black.textContent = data.players[1].user.name;
	}
});
