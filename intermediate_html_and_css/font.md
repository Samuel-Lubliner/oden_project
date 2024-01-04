# Font

## The system font stack

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

## Online font libraries

To use a font from one of these libraries, go to the website, select a font and then copy a snippet from the website to import that font from their server into your website.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

… or an @import tag that can be dropped at the top of a CSS file.

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

Either method will import that font and make it available for you to use in your CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

It’s important to add a fallback font.

