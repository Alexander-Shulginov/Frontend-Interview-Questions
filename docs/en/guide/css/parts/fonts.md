### Fonts

:::details What are the available methods of loading fonts?

Fonts can be loaded either locally or via a `CDN`.

For local font loading, the `@font-face` rule is used. It allows you to define the font name, weight, style, loading behavior, and file path.

```css
@font-face {
    font-family: 'CustomFont';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/custom-font.woff2') format('woff2'), url('/fonts/custom-font.woff') format('woff');
}
```

To load fonts from a `CDN`, you need to include a `<link>` tag pointing to the font resource.
For better performance, it's recommended to use font preloading via `<link rel="preconnect" href="...">`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
```

:::

:::details How to optimize font loading?

1. Use modern font formats — currently `woff2` is sufficient; add `woff` only for legacy browsers like Internet Explorer.

1. Prefer local font loading.

1. Use `unicode-range` to subset fonts.

1. When loading fonts via `CDN`, use preconnect to reduce DNS and connection latency.

1. Remove unused glyphs from font files to reduce size.

1. For local font loading, use the `preload` attribute for faster rendering:

```html
<link rel="preload" href="fonts/myfont.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
```

:::

:::details What is the purpose of the font-display property?

The `font-display` property controls how a font is rendered during its loading phase.

This property plays a critical role in perceived performance and user experience.

By default, the value is `auto`, which may block text rendering until the custom font is fully loaded. Once loaded, it replaces the fallback font, potentially causing layout shifts.

The `swap` value does not block text rendering — the fallback system font is shown immediately, and the custom font is swapped in once it's ready.

The `block` value hides the text for up to 3 seconds. If the custom font loads in time, it will be used; otherwise, the fallback font will be displayed.

The `fallback` value is a compromise between `swap` and `block`. It shows the fallback font during the initial 3 seconds. If the custom font loads during that time, it replaces the fallback; otherwise, the fallback remains.

The `optional` value also uses the fallback font initially. However, if the browser determines that the custom font is loading too slowly, it may cancel the request entirely.

:::

:::details What is the unicode-range property for?

The `unicode-range` property allows you to define which character ranges a font should support.
It is often used for multilingual sites where specific font subsets are loaded only if the corresponding characters appear on the page.

:::

:::details What are variable fonts?

Variable fonts allow multiple font weights and styles to be stored in a single font file.

Traditionally, separate font files were required for each style (e.g., bold, semi-bold, italic), increasing HTTP requests and load time.
Variable fonts solve this problem by embedding multiple styles into one file.

Advantages of variable fonts:

Flexible control over font properties like weight, width, slant

Animatable font properties

Fewer HTTP requests

Disadvantages:

Higher CPU/GPU usage

Some variable fonts are significantly larger

Potential issues with `font-display: swap` on initial render

:::

:::details FOUT? FOIT?

`FOUT` – Flash of Unstyled Text
FOUT occurs during initial font rendering when the system fallback font is displayed first, and then replaced by the loaded custom font.

This creates a negative UX impact — the user starts reading the content, and suddenly the font style changes.
This can cause the user to lose their reading position or be visually disrupted due to layout shifts.

`FOIT` – Flash of Invisible Text
FOIT happens when no text is rendered until the custom font is fully loaded.

This is also a negative UX pattern, as the user is forced to wait without seeing any text content.

It is recommended to use font-display: swap;, which prevents the FOIT effect.
When choosing between showing a default font or no text at all, the default font is always the better choice.

:::
---
