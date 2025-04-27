export function isWebkit(window: Window): boolean {
	// @ts-expect-error: this property "doesn't exist" on type Window
	return typeof window.webkitConvertPointFromNodeToPage === "function";
}
