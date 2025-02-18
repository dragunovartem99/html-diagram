# HTML Diagram

Render chess diagrams with plain text – a lightweight Web Component

## Notice about Fonts

Before use:
please review and comply with the licensing terms of any font used in this demo

## Basic Usage (JS -> CSS -> HTML)

1. JS: Import the `createDiagram` function; then use it to create custom HTML element:

```js
import { createDiagram } from "html-diagram";
customElements.define("my-diagram", createDiagram())
```

[Learn more about this "customElements" thing](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

2. CSS: Pick the chess font you like; then define it in CSS.

You can look in "./public/fonts" in this repository, or find something alternative online.
In this example, we'll use the Merida font.

```css
@font-face {
    font-family: "Chess Merida";
    src: "<your-path>.ttf";
}
```

Then, you must tell your diagram to use this font. This is achieved by using CSS variable:

```css
my-diagram {
    --diagram-font: "Chess Merida";
}
```

3. HTML: Use element

```html
<!-- empty board position -->
<my-diagram></my-diagram>

<!-- starting position -->
<my-diagram></my-diagram>
```

## Styling Options

- Font
- Color
- Letter spacing

## Programmatic Usage

How to interact with component with JavaScript

- fen
- flipped
- fontMap

## What is a FontMap?

## TypeScript

