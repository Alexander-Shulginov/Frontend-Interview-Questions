---
layout: doc
title: CSS
---

# CSS

:::details What is the Box Model?

> A concept that defines the structure and behavior of elements on a web page.

Structurally, every element on a page consists of:
- Content
- Padding
- Border
- Margin  

***
The size of elements is calculated based on the `box-sizing` property value.  
With `content-box`, only width and height are considered, excluding padding and borders. This behavior can be counterintuitive, as the actual size will not match the one displayed in devtools.  
The `border-box` property calculates element sizes by including width, height, padding, and borders, solving the issues of the `content-box` property.

***
> By default, all elements on the page are divided into block and inline elements.

Block elements:
- Take up the full available width
- Stack on top of each other
- Can have width and height explicitly set  

Inline elements:
- Flow next to each other
- Their width and height are defined by their content and cannot be explicitly set
- Vertical padding and margins will not work  

Inline-block elements:
- Flow next to each other
- Can have width and height explicitly set
- Vertical and horizontal padding and margins will be applied  

:::
