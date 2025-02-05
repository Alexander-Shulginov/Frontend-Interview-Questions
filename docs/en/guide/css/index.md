---
layout: doc
title: CSS
---

# CSS

:::details What is the Box Model?

The concept that defines the structure and behavior of elements on a page.

Structurally, each element on the page consists of:

-   Content
-   Padding
-   Border
-   Margin

---

The element's size is calculated based on the `box-sizing` property.  
With `content-box`, only width and height are considered, excluding padding and borders, which can be counterintuitive since the actual size will not match the size shown in DevTools.  
The `border-box` property includes width, height, padding, and borders in calculations, solving the `content-box` issue.

---

By default, all elements on the page are either block or inline.

Block:

-   Occupy the full available width
-   Are positioned one below the other
-   Can have width and height set

Inline:

-   Are positioned next to each other
-   Width and height are defined by the content and cannot be set directly
-   Vertical padding and margins do not work

Inline-block:

-   Are positioned next to each other
-   Can have width and height set
-   Padding and margins apply properly

:::

:::details What is Specificity?

Specificity determines the priority of styles applied to an element.

CSS provides multiple ways to style elements, including:

-   By tag
-   By class
-   By attribute
-   Inline styles

If multiple styles are applied to an element, specificity calculates the _weight_ of each rule.  
The `!important` rule overrides specificity, applying styles regardless of specificity, inheritance, etc.

:::

:::details What is Inheritance?

The ability of child elements to inherit styles from their parent elements.
By default, only typographic properties like `font-size`, `color`, `line-height`, etc., are inherited.

The `inherit` property allows explicit inheritance of styles.  
For the `color` property, `currentColor` enables direct inheritance of the parent’s color.

`!important` ignores inheritance and forces styles to apply without considering the cascade.

:::

:::details What is the Cascade?

A mechanism that determines which styles are applied to elements based on their origin and priority.

Sources of styles:

-   Browser default styles with `!important`
-   Inline styles with `!important`
-   Styles from animations and transitions (`animation`, `transition`)
-   Regular inline styles
-   Styles from external `.css` files
-   Browser default styles

In addition to the source, the cascade also considers specificity and inheritance.

:::

:::details What is the Stacking Context?

It controls how elements overlap and are positioned along the Z-axis.

A stacking context is created when:

-   The element is positioned (`absolute`, `relative`, `fixed`)
-   The `z-index` property is set to a value other than `auto`
-   Properties like `opacity`, `transform`, or `filter` are applied

The `z-index` property controls the stacking order, with higher values appearing above lower ones.

Inside each stacking context, the rendering order is:

1. Background and borders
1. Elements with `z-index` < 0
1. Block elements (`display: block;`)
1. Floating elements (`float`)
1. Inline elements (`display: inline`)
1. Elements with `opacity` < 1
1. Elements with `z-index` > 0
   :::

:::details What is a Selector?

A pattern used to target elements on the page.

Types of selectors:

-   Universal selector `*` - selects all elements except pseudo-elements `::before`, `::after`
-   Tag selector `div`, `p`, `a`
-   Class selector `.nav`, `.button--primary`
-   ID selector `#sidebar`, `#item`
-   Attribute selector `[checked]`, `[type='button']`

Selector combinations:

-   _Grouping_ `.title, h3, .link__text` - selects multiple elements
-   _Combining_ `div.nav.nav__item` - selects elements that match all specified selectors
-   _Descendant_ `li a` - selects the last selector if inside the first
-   _Direct child_ `section > h3` - applies styles only if `h3` is a direct child of `section`
-   _Adjacent sibling_ `label + input` - applies styles if elements are on the same level
-   _General sibling_ `span ~ span.color--accent` - applies styles to all matching elements on the same level

Overusing selector combinations is bad practice since it depends on document structure. If elements move, combined selectors may break.

:::

:::details What is Document Flow?

The document flow controls the positioning of elements on the page.

By default, elements are placed in the _normal flow_:  
Block elements are positioned one below the other and take up the full width, while inline elements are positioned next to each other with width defined by content.

An element can be removed from normal flow using `position: absolute;` or `position: fixed;`.

Similarly, `float: left;` removes an element from the normal flow, allowing text to wrap around it.

With `display: flex;` or `display: grid;`, the parent element manages positioning, ignoring the normal flow.

:::

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
