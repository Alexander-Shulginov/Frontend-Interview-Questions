### Base

:::details What are media queries?

Media queries allow a webpage to adapt to different types of devices it may be viewed on.

They enable styling based on:

-   device width and height,
-   horizontal or vertical orientation,
-   dark or light theme,
-   pixel density,
-   screen aspect ratio,
-   presence of touch input.

:::

:::details What are Pseudo-Elements?

Pseudo-elements are special elements created via CSS that do not exist in the DOM, meaning they cannot be accessed via JavaScript.  
They are often used for visual effects or overlays.

List of pseudo-elements:

-   `::before`, `::after` — the most common ones, adding a pseudo-element before or after a real element.
-   `::placeholder` — used for styling placeholder text.
-   `::selection` — allows styling the text selection color.
-   `::first-letter`, `::first-line` — style the first letter and the first line of text.

:::

:::details What are Pseudo-Classes?

Pseudo-classes are used to style the state of elements on the page.  
Elements can be in states like:

-   Hovered `:hover`
-   Focused `:focus-visible`
-   Disabled `:disabled`
-   Pressed `:active`
-   Links can be visited `:visited`
-   Checkboxes can be checked `:checked`
-   Empty `:empty`

There are also two special groups of pseudo-classes: `nth-child` and `nth-of-type`.

:::
:::details What are nth-child and nth-of-type used for?

These are pseudo-classes that allow us to target child elements conveniently.

They allow us to:

-   Target the first or last element in a list: `:first-child`, `:last-child`
-   Target even or odd elements in a list: `:nth-child(odd)`, `nth-child(even)`
-   Select elements in a specified order: `nth-child(3n)` will select every 3rd element
-   Select elements in a specified order with a starting point: `nth-child(3n + 2)` will select every 3rd element starting from the 2nd element

`nth-child` and `nth-of-type` have the same functionality for selecting elements. The difference is that `nth-child` works with any type of child elements, while `nth-of-type` only targets elements of a specific type.

:::

:::details Explain the different methods of positioning elements on a page?

By default, in the standard document flow, elements are arranged according to the rules of the box model, with block elements stacked vertically and inline elements laid out horizontally, etc. The `position` property for such elements is `static`.

For relative positioning, `position: relative;` is used. With this property, you can adjust the position of an element using `top`, `right`, `bottom`, `left`. The unique feature of relative positioning is that the element does not leave the document flow, and the space it originally occupied is preserved.

For absolute positioning, `position: absolute;` is used for the element to be positioned, and `position` can be set to `relative`, `absolute`, or `fixed` for the container in which the element is positioned. An absolutely positioned element is removed from the document flow and can overlap other elements.

For fixed positioning, `position: fixed;` is used. An element with this property is positioned relative to the browser window and remains in place when scrolling the page. Fixed positioning is commonly used for site headers, "back to top" buttons, and widgets.

For sticky positioning, `position: sticky;` is used, which combines both relative and fixed positioning. By default, a sticky element behaves like a relatively positioned element. As the page is scrolled, it behaves like a fixed element, sticking to the screen. Once the container containing the sticky element is scrolled past, the element will return to behaving as a relatively positioned element.
:::

:::details Why Are Vendor Prefixes Needed?

Vendor prefixes allow browsers to support non-standardized or experimental CSS properties.

If a CSS rule is implemented in a browser but not yet stabilized in the specification, a prefix is added:

-   `-webkit` - for browsers using the WebKit/Blink engine (Chrome, Opera, Edge, Yandex Browser)
-   `-moz` - for Firefox
-   `-o` - for Opera (< version 12)
-   `-ms` - for Microsoft Explorer (< version 11)

Typically, vendor prefixes are not added manually but are handled automatically by Autoprefixer.

:::

:::details What is margin collapsing?

**Margin collapsing** occurs when one element has `margin-bottom` set and the element below it has `margin-top` set. The spacing between these elements will not be summed but will be equal to the larger of the two values.

:::

:::details **What can you tell about CSS units?**

In CSS, measurement units are divided into absolute and relative.

**Absolute units**

-   Pixels (`px`) — the most precise unit of measurement.
-   Besides pixels, there are other units like millimeters (`mm`), centimeters (`cm`), inches (`in`), points (`pt`), and picas (`pc`). However, they are rarely used since they are internally converted to pixels.

**Relative units**

-   `em` — calculates size based on the font size of the parent element. Not recommended for usage in `font-size` as it can cause uncontrolled scaling in nested elements.
-   `rem` — calculates size relative to the root `html` element's font size, which defaults to `16px`.
-   `%` — calculates size relative to the parent element:
    -   `width`, `height`, `padding`, `margin` — relative to the parent's `width`/`height`.
    -   `font-size`, `line-height` — relative to the parent's `font-size`.
    -   `top`, `right`, `bottom`, `left` — relative to the positioned parent.
-   `vh` — calculates size relative to the viewport height. Works inconsistently on mobile due to system UI overlays.
-   `vw` — calculates size relative to the viewport width.
-   `vmin`, `vmax` — calculate size relative to the smallest/largest viewport dimension.
-   `dvh`, `svh`, `lvh` — take system UI overlays into account on mobile devices, serving as modern replacements for `vh`.

:::

:::details How does the `visibility` property work, and how is it different from `display: none`?

The `visibility` property visually hides an element from the page, making it invisible. Such an element cannot be focused, and event handlers will not trigger.  
`display: none;` completely removes the element from the DOM tree.

:::
