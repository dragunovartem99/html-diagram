// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
export function validateBooleanAttribute(name: string, value: string) {
	return [name.toLowerCase(), ""].includes(value?.toLowerCase());
}
