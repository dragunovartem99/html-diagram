export class Stylesheet {
	#path;

	constructor(path: string) {
		this.#path = path;
	}

	async create() {
		const sheet = new CSSStyleSheet();
		const { default: rules } = await import(/* @vite-ignore */ this.#path);
		sheet.replaceSync(rules);
		return sheet;
	}
}
