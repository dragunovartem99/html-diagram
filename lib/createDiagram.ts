import { Options } from "./types";

import { defaultOptions } from "./static/defaultOptions";
import HTMLDiagram from "./objects/HTMLDiagram";

export function createDiagram(options?: Options) {
	return HTMLDiagram({ ...defaultOptions, ...options });
}
