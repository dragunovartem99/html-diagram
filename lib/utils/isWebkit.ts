import { DOMWindow } from "jsdom";

// https://developer.mozilla.org/en-US/docs/Web/API/Window/webkitConvertPointFromNodeToPage
export function isWebkit(window: Window | DOMWindow): boolean {
	// @ts-expect-error: this property "doesn't exist" on type Window
	return typeof window.webkitConvertPointFromNodeToPage === "function";
}
