# HTML and CSS

HTML elements reference
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element>
<https://devdocs.io/> is an open source web app that combines documentation for lots of developer tools

## HTML (HyperText Markup Language)

Defines the structure and content of webpages.

Most elements are content wrapped in opening and closing HTML tags.

Some elements such as `<img/>` are self-closing.

Using the correct tags impacts how websites

- are ranked in search engines and
- how accessible they are to users who rely on assistive technologies

Semantic HTML uses the correct elements for content

## HTML Boilerplate

index.html is the homepage of a website

### VSCode shortcut

In the index.html file enter `!` on the first line.

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Webpage Title</title>
  </head>
</html>
```

### Doctype

Tells the browser what version of HTML it should use to render the document.

```html
<!DOCTYPE html>
```

### root element

``` html
<html lang="en">
</html>
```

### Head element

Contains meta-information about the webpages, and stuff required for our webpages to render correctly in the browser.

### Meta element

Sets charset encoding of the webpage in the head element. Ensures that the webpage will display special symbols and characters from different languages correctly in the browser.

```html
<meta charset="utf-8">.
```

### Title element

```html
<title>My Webpage Title</title>
```

## Body Element

Where all the content is displayed

Complete the boilerplate with the body element within the html element and below the head element

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>
```

## Opening your HTML pages in the browser

Live server extension in VSCode automatically refreshes every time the document is saved.

There may be subtle differences when using extensions. Live server will always use UTF-8 character encoding and not the charset value defined in the meta element. This could potentially hide some characters.
