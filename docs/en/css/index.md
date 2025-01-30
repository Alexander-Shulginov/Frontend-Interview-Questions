---
layout: doc
title: CSS
---

# CSS

:::details What is the Box Model?

> A concept that defines the structure and behavior of elements on a web page.

Structurally, every element on a page consists of:

-   Content
-   Padding
-   Border
-   Margin

---

The size of elements is calculated based on the `box-sizing` property value.  
With `content-box`, only width and height are considered, excluding padding and borders. This behavior can be counterintuitive, as the actual size will not match the one displayed in devtools.  
The `border-box` property calculates element sizes by including width, height, padding, and borders, solving the issues of the `content-box` property.

---

> By default, all elements on the page are divided into block and inline elements.

Block elements:

-   Take up the full available width
-   Stack on top of each other
-   Can have width and height explicitly set

Inline elements:

-   Flow next to each other
-   Their width and height are defined by their content and cannot be explicitly set
-   Vertical padding and margins will not work

Inline-block elements:

-   Flow next to each other
-   Can have width and height explicitly set
-   Vertical and horizontal padding and margins will be applied

:::
:::details What is specificity?

> Specificity determines the priority with which styles will be applied to an element.

CSS provides various ways to style elements, including:

-   By tag
-   By class
-   By attribute
-   Inline styles

If an element is styled using multiple methods, specificity calculates the _weight_ of applied styles.  
The `!important` rule overrides specificity, applying styles regardless of specificity, inheritance, etc.

:::

:::details What is inheritance?

Inheritance allows child elements to apply properties from their parent elements.  
By default, properties related to typography, such as `font-size`, `color`, and `line-height`, are inherited.

To control inheritance, the `inherit` value can be used to explicitly inherit properties.  
For the `color` property, the `currentColor` keyword allows direct inheritance of the parent's color.

`!important` ignores inheritance by applying styles without considering the inheritance rules.

:::

:::details What is the cascade?

> The mechanism that determines from which source and under what rules styles will be applied to elements on the page.

Sources of styles:

-   Browser styles with `!important`
-   Inline styles with `!important`
-   Styles from animations and transitions (`animation`, `transition`)
-   Regular inline styles
-   Styles from external `.css` files
-   Browser default styles

Besides the origin of styles, the cascade also considers specificity and inheritance.

:::

:::details How does stacking context work?

> Controls how elements are layered on top of each other along the Z-axis.

A stacking context is created when:

-   An element has a non-static position (`position: absolute`, `position: relative`, `position: fixed`)
-   The `z-index` property is set to a non-auto value (`z-index: 1`)
-   Certain properties like `opacity`, `transform`, or `filter` are applied

To manage the stacking order, the `z-index` property is used.  
An element with a higher `z-index` value will appear "above" others.

Within each stacking context, the rendering order of layers is as follows:

1. Background (`background`) and borders (`border`)
2. Elements with a `z-index` less than 0
3. Block elements (`display: block;`)
4. Floating elements (`float`)
5. Inline elements (`display: inline`)
6. Elements with `opacity` less than 1
7. Elements with `z-index` greater than 0
   :::
