# HTML Diagram

Demo: https://dragunovartem99.github.io/html-diagram

```html
<html-diagram>
    Render chess diagrams with plain text – a lightweight Web Component
</html-diagram>
```

<img src="https://github.com/user-attachments/assets/e7e6acac-8058-4e49-9b97-dad1f90e2346" width="240" alt="Screenshot of HTML Diagram with Adventurer font">

## Features

- Perfect for printing on paper
- Allows creation of old-school and unique-looking diagrams
- Scales endlessly without quality loss (as it doesn't use image formats)
- Zero dependencies
- Light: used JavaScript module weights is `~5kb`
- Friendly to your CPU. Actually, it's just two `<div>` elements and 64 characters

## Note About Fonts

Full list of Fonts and their Authors: [List of Supported Fonts](#list-of-supported-fonts)

> [!IMPORTANT]
> All fonts in the demo are marked as **Freeware**.  
> However, it is strongly recommended to review the README file of any font you intend to use.

The **HTML Diagram** itself does not include any fonts, as you can check in the [npm package files](https://www.npmjs.com/package/html-diagram?activeTab=code) of the `html-diagram` package.

However, to ensure proper display, users needs to pick some chess font for rendering a diagram. For this demo, I've used **Freeware** fonts from the wonderful [Nørresundby Chess Club](https://www.enpassant.dk/chess/fonteng.htm).

All fonts used in the demo are located in [./public/fonts](https://github.com/dragunovartem99/html-diagram/tree/main/public/fonts) directory. Each subdirectory follows this structure:

```
📂 Diagram<font-name>
├── 📄 Diagram<font-name>.woff2
├── 📄 ORIGINAL_FONT.ttf
└── 📄 ORIGINAL_README.txt (if available)
```

### woff2 versions

To achieve minimum file size and consistency, each original font is accompanied by a `woff2` version. The `woff2` files reuse the following glyphs: king, queen, rook, bishop, knight, pawn, and empty square.

No modifications have been made to the design of the original glyphs.

> The `woff2` versions were created with FontForge, using encoding ISO 8859-5 (Cyrillic)

## Basic Usage

### 1. Installation

```shell
npm install html-diagram
```

### 2. JavaScript

Import the `HTMLDiagram` class; then use it to create custom HTML element:

```js
import { HTMLDiagram } from "html-diagram";
customElements.define("my-diagram", HTMLDiagram)
```

[Learn more about "customElements" on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

### 3. CSS

Pick the chess font you like; then define it in CSS.

After you've read [note about fonts](#note-about-fonts), you can look in [./public/fonts](https://github.com/dragunovartem99/html-diagram/tree/main/public/fonts) directory, and pick something you like.

In this example, we'll use the lovely "Adventurer" font by chess fonts _champion_ - Armando H. Marroquin:

```css
@font-face {
    font-family: "Diagram Adventurer";
    src: "<your-path>/DiagramAdventurer.woff2";
}
```

Then, you must tell your diagram to use this font. This is achieved by using CSS variable:

```css
my-diagram {
    --diagram-font: "Diagram Adventurer";
}
```

### 4. HTML

Use element on your page

```html
<!-- empty board -->
<my-diagram></my-diagram>
```

## Attributes

- ...

## Styling Options

- Font
- Color
- Letter spacing

```css
--diagram-font
--diagram-color
--diagram-border
--diagram-spacing

--diagram-coords-font
--diagram-coords-color
--diagram-coords-capitalize
--diagram-coords-size

--diagram-files-offset
--diagram-files-start
--diagram-files-gap
--diagram-files-size

--diagram-ranks-offset
--diagram-ranks-start
--diagram-ranks-gap
--diagram-ranks-size
```

## List of Supported Fonts

[Note About Fonts](#note-about-fonts)
A big thank you to all the people and companies who created these amazing fonts:

| Font       | Author               | Year |
| ---------- | -------------------- | ---- |
| Adventurer | Armando H. Marroquin | 2000 |
| Kingdom    | Armando H. Marroquin | 1998 |
| Leipzig    | Armando H. Marroquin | 1998 |
| Smart      | Christoph Wirth      | 1992 |
| Tasc       | Tasc B.V.            | 1995 |

If you know of any more **Freeware** chess fonts, or if you've created your own, feel free to let me know!
