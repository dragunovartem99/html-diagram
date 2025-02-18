# HTML Diagram

Demo: https://dragunovartem99.github.io/html-diagram

```html
<html-diagram>
    Render chess diagrams with plain text – a lightweight Web Component
</html-diagram>
```
<img src="https://github.com/user-attachments/assets/acb26d89-d62e-4044-9fb1-b77c4869c877" width="240" alt="Screenshot of HTML Diagram with Adventurer font" >

## Warning About Fonts

> [!WARNING]
> **Before use:** Please review and comply with the licensing terms of any font used in the demo.

The **HTML Diagram** itself does not include any fonts, as you can see in the [npm package files](https://www.npmjs.com/package/html-diagram?activeTab=code) of `html-diagram`.

However, the _demo_ (which shows the general idea) at https://dragunovartem99.github.io/html-diagram uses multiple fonts.

The demo was created for **two purposes only**:
1. To test how HTML Diagram can support different chess fonts.
2. To give users an opportunity to explore various chess fonts and find inspiration.

All fonts in the demo were downloaded from the amazing [Nørresundby Chess Club](https://www.enpassant.dk/chess/fonteng.htm).

> [!IMPORTANT]
> All fonts in the demo were marked as **Freeware**.  
> However, it is strongly recommended to review the license of any font you intend to use.
>
> You can redownload the desired font from the [Nørresundby Chess Club](https://www.enpassant.dk/chess/fonteng.htm).  
> The font archive may contain additional information about its terms of usage.

## Features

- Allows creation of old-school and unique-looking diagrams
- Perfect for printing on paper
- Scales endlessly without quality loss (it doesn't uses image formats)
- Zero dependencies
- Light: `< 5kb` uncompressed
- Friendly to your CPU. Actually, it's just a `<div>` element with 64 characters

## What it is (and what it's not)

- ...

## Basic Usage

### 1. Installation

- ...

### 2. JavaScript

Import the `createDiagram` function; then use it to create custom HTML element:

```js
import { createDiagram } from "html-diagram";
customElements.define("my-diagram", createDiagram())
```

[Learn more about "customElements" on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

### 3. CSS

Pick the chess font you like; then define it in CSS.

You can look in "./public/fonts" in this repository (but make sure you've read, find alternative online, or make your own as font designer!

In this example, we'll use the popular Merida font by _true legend_ - Armando H. Marroquin:

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

### 4. HTML
Use element on your page

```html
<!-- empty board position -->
<my-diagram></my-diagram>

<!-- starting position -->
<my-diagram fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"></my-diagram>
```

## Default Options

- ...

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

