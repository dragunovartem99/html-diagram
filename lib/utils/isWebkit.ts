export function isWebkit(window: Window): boolean {
	// @ts-ignore
	return typeof window.webkitConvertPointFromNodeToPage === "function";
}
