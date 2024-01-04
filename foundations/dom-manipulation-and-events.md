# DOM - Document Object Model
The is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

## Targeting nodes with selectors

When working with the DOM, you use “selectors” to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want.

```
div.display

.display

#container > .display

div#container > div.display
```

You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes.

```js
const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```

Identifying a certain node based on its relationships to the nodes around it.

## DOM methods

When HTML is parsed by a web browser, it is converted to the DOM. These nodes are objects that have many properties and methods attached to them to manipulate the webpage with JavaScript.

## Query selectors

`element.querySelector(selector)` - returns a reference to the first match of selector.

`element.querySelectorAll(selectors)` - returns a “nodelist” containing references to all of the matches of the selectors.

When using querySelectorAll, the return value is not an array. It’s really a “nodelist”. Several array methods are missing from nodelists. One solution, if problems arise, is to convert the nodelist into an array with `Array.from()` or the spread operator.

## Element creation

`document.createElement(tagName, [options])` - creates a new element of tag type tagName.

`const div = document.createElement('div');`

This function does NOT put your new element into the DOM. It creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.

## Append elements

`parentNode.appendChild(childNode)` - appends childNode as the last child of parentNode.

`parentNode.insertBefore(newNode, referenceNode)` - inserts newNode into parentNode before referenceNode.

## Remove elements

`parentNode.removeChild(child)` - removes child from parentNode on the DOM and returns a reference to child.

## Altering elements

When you have a reference to an element, you can use that reference to alter the element’s own properties.

```js
const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'
```

## Adding inline style

```js
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
```

Note that if you’re accessing a kebab-cased CSS rule from JS, you’ll either need to use camelCase or you’ll need to use bracket notation instead of dash notation.

```js
div.style.background-color // doesn't work - attempts to subtract color from div.style.background

div.style.backgroundColor // accesses the div's background-color style

div.style['background-color'] // also works

div.style.cssText = "background-color: white;" // sets the div's background-color by assigning a CSS string
```

## Editing attributes

```js
div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute
```

## Working with classes

```js
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it
```

It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.

## Adding text content

```js
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div Adding HTML content
div.innerHTML = '<span>Hello World!</span>';                   
// renders the HTML inside div
```

Note that textContent is preferable for adding text, and innerHTML should be used sparingly as it can create security risks if misused (e.g., Cross-Site Scripting attacks).

### HTML

```HTML
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```

### JavaScript

```JavaScript
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```

In the JavaScript file, first we get a reference to the container div that already exists in our HTML. Then we create a new div and store it in the variable content. We add a class and some text to the content div and finally append that div to container. All in all it’s a simple process. After the JavaScript code is run, our DOM tree will look like this:

```html
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the text-content!
    </div>
  </div>
</body>
```

JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

JavaScript, for the most part, is run whenever the JS file is run, or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

Alternatively, you can link the JavaScript file in the head of your HTML document. Use the script tag with the src attribute containing the path to the JS file, and include the defer keyword to load the file after the HTML is parsed, as such:

```html
<head>
  <script src="js-file.js" defer></script>
</head>
```

The script element

- should also go into the head
- and should include a src attribute
  - containing the path to the JavaScript you want to load
  - and defer, which basically instructs the browser to load the JavaScript after the page has finished parsing the HTML.

This makes sure that the HTML is all loaded before the JavaScript runs, so that you don't get errors resulting from JavaScript trying to access an HTML element that doesn't exist on the page yet.

There a number of ways to handle loading JavaScript on your page, but this is the most reliable one to use for modern browsers.

## Events

Events are actions that occur on your webpage such as mouse-clicks or keypresses, and using JavaScript we can make our webpage listen and react to these events.

- You can specify function attributes directly on your HTML elements.
- You can set properties of form on[eventType] (onclick, onmousedown, etc.) on the DOM nodes in your JavaScript
- You can attach event listeners to the DOM nodes in your JavaScript. Event listeners are the preferred method.

## 3 buttons

All alert “Hello World” when clicked.

Method 1

```html
<button onclick="alert('Hello World')">Click Me</button>
```

This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.

Method 2

```HTML
<button id="btn">Click Me</button>
```

```JavaScript
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```

We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.

Method 3

```HTML
<button id="btn">Click Me Too</button>
```

```JavaScript
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

Note that all 3 of these methods can be used with named functions like so:

```html
<!-- the HTML file -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button>
```

```js
// the JavaScript file 
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
```

```html
<!-- the HTML file -->
<!-- METHODS 2 & 3 -->
<button id="btn">CLICK ME</button>
```

```js
// the JavaScript file 
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector('#btn')

// METHOD 2
btn.onclick = alertFunction;
```

```js
// METHOD 3
btn.addEventListener('click', alertFunction);
```

Using named functions can clean up your code, and is a good idea if the function is something that you are going to want to do in multiple places.

```js
btn.addEventListener('click', function (e) {
  console.log(e);
});
```

Note that function (e) is a callback from addEventListener.

The e in that function is an object that references the event itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.

```JS
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
```

```JS
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
```

## Attaching listeners to groups of nodes

We can get a nodelist of all of the items matching a specific selector with `querySelectorAll('selector')`. In order to add a listener to each of them we need to iterate through the whole list:

```html
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```

```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

Some useful events include:

- click
- dblclick
- keydown
- keyup