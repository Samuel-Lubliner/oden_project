# Cascading Style Sheets

## Basic syntax

- CSS is made up of various rules
- Rules are made up of
  - a selector and
  - a semicolon-separated list of declarations
    - each declaration made up of a property–value pair

## Selectors

Refer to the HTML elements to which CSS rules apply

### Universal selector

The universal selector will select elements of any type

```css
* {
  color: purple;
}
```


### Type selectors

A type selector (or element selector) selects all elements of the given element type

```css
div {
  color: white;
}
```

### Class selectors

Select all elements with the given class, which is just an attribute you place on an HTML element.

```html
<div class="alert-text">Please agree to our terms of service.</div>
```

```css
.alert-text {
  color: red;
}
```

### The grouping selector

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

## Chaining selectors

```css
.subsection.header {
  color: red;
}
```

## CSS Legal Color Values

<https://www.w3schools.com/cssref/css_colors_legal.php>

### Image height and width

By default, an img element’s height and width values will be the same as the actual image file’s height and width.

Use auto to adjust the size of the image without causing it to lose its proportions.

## External CSS

Creating a separate file for the CSS and linking it inside of an HTML’s opening and closing head tags with a self-closing link element

- Keep HTML and CSS separated
- smaller HTML files
- Only need to edit the CSS in one place

```html
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```html
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

When an element has multiple, conflicting declarations targeting it

- ID selector will always beat any number of class selectors
- class selector will always beat any number of type selectors
- type selector will always beat any number of less specific selectors

### Inheritance

CSS properties that are inherited by that element’s descendants without explicitly writing a rule for those descendants.

Typography-based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

Exception: when directly targeting an element beats inheritance

### Rule order

If after every other factor has been taken into account, there are still multiple conflicting rules targeting an element, the rule was the last defined is the winner.

## Inspecting HTML and CSS

<https://developer.chrome.com/docs/devtools/>

<https://developer.chrome.com/docs/devtools/overview/>

<https://developer.chrome.com/docs/devtools/open/>

<https://developer.chrome.com/docs/devtools/dom/>

<https://developer.chrome.com/docs/devtools/css>

<https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/>

## The box model

Everything on a webpage is a rectangular box that can have other boxes in them and can sit alongside one another.

Padding increases the space between the border of a box and the content of the box.

Margin increases the space between the borders of a box and the borders of adjacent boxes.

Border adds space between the margin and the padding.

## Block vs inline

By default, block elements will appear on the page stacked atop each other, each new element starting on a new line.

Inline elements appear in line with whatever elements they are placed beside.

## Divs and spans

Generic boxes that can contain anything.

We can give an id or class to target them for styling with CSS. Another use case we will face regularly is grouping related elements under one parent element to correctly position them on the page. 

Div is a block-level element by default. It is commonly used as a container element to group other elements. Divs allow us to divide the page into different blocks and apply styling to those blocks.

## Flexbox

Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define

### Flex container

Any element that has display: flex on it. A flex item is any element that lives directly inside of a flex container.

You can also put display: flex on a flex item and then use flexbox to arrange its children.
