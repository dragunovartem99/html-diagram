const css = `
svg {
	width: 100%;
	line-height: 0;
}
span {
	line-height: 1;
	font-size: 10px;
	color: var(--diagram-color);
	font-family: var(--diagram-font);
	line-break: anywhere;
	white-space: break-spaces;
}
`;

export default () => {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
};
