// https://html.spec.whatwg.org/dev/common-microsyntaxes.html#boolean-attributes
// in theory, it is much stricter, but I don't want to enforce it (at least now)

export function checkBooleanAttribute(value: string | null): value is string {
	return value !== null;
}
