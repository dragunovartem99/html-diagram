const css = `
	:host {
		display: grid;
		container-type: inline-size;
		grid-template-columns: repeat(8, 1fr);
		grid-auto-rows: 1fr;
	}

	:host > * {
		user-select: none;
		line-height: 1;
		color: var(--diagram-stroke, black);
		font-size: var(--diagram-webkit-unit, 12.5cqw);
		margin: -0.1cqw;
		font-family: var(--diagram-font);
		position: relative;
	}
	           *::before { content: "+" }
	      [dark]::before { content: "=" }
	      [is=P]::before { content: "P" }
	[dark][is=P]::before { content: "p" }
	      [is=N]::before { content: "N" }
	[dark][is=N]::before { content: "n" }
	      [is=B]::before { content: "B" }
	[dark][is=B]::before { content: "b" }
	      [is=R]::before { content: "R" }
	[dark][is=R]::before { content: "r" }
	      [is=Q]::before { content: "Q" }
	[dark][is=Q]::before { content: "q" }
	      [is=K]::before { content: "K" }
	[dark][is=K]::before { content: "k" }
	      [is=k]::before { content: "Ц" }
	[dark][is=k]::before { content: "ц" }
	      [is=q]::before { content: "Ф" }
	[dark][is=q]::before { content: "ф" }
	      [is=r]::before { content: "Л" }
	[dark][is=r]::before { content: "л" }
	      [is=b]::before { content: "С" }
	[dark][is=b]::before { content: "с" }
	      [is=n]::before { content: "К" }
	[dark][is=n]::before { content: "к" }
	      [is=p]::before { content: "П" }
	[dark][is=p]::before { content: "п" }
`;

export function getBoardCSS() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
