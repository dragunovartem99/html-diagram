import "./css/style.css";

import { defineHtmlDiagram } from "../src/createHtmlDiagram";
import { IHTMLDiagram as HTMLDiagram } from "../src/types/index";
import standardFontMap from "../src/static/standard-font-map";

import nonStandardMaps from "./non-standard-maps.ts";
import { watchTV } from "./watchTV.ts";

defineHtmlDiagram("my-diagram");

const typography = document.querySelector("#typography")!;

typography.addEventListener("change", (event) => {
	const { value: font } = event.target as HTMLSelectElement;
	document.querySelector("#app")!.setAttribute("style", `--diagram-font: Chess ${font}`);

	const diagrams: NodeListOf<HTMLDiagram> = document.querySelectorAll("my-diagram");

	diagrams.forEach(
		(diagram) =>
			(diagram.fontMap = nonStandardMaps.has(font)
				? nonStandardMaps.get(font)
				: standardFontMap),
	);
});

watchTV((frame: any) => {
	const { t: type, d: data } = frame;

	const live = document.querySelector("#live")!;
	const diagram: HTMLDiagram = live.querySelector("my-diagram")!;

	diagram.fen = data.fen;

	if (type === "featured") {
		const [white, black] = live.querySelectorAll(".player");
		const link: HTMLAnchorElement = live.querySelector("a")!;

		link.href = "https://lichess.org/" + data.id;
		white.textContent = data.players[0].user.name;
		black.textContent = data.players[1].user.name;
	}
});
