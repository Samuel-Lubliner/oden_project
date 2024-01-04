# Emmet

<https://docs.emmet.io/actions/wrap-with-abbreviation/>

<https://docs.emmet.io/actions/remove-tag/>

<https://www.youtube.com/watch?v=V8vizNQKtx0>

https://docs.emmet.io/cheat-sheet/

VS Code plugin

`!`

```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### HTML Abbreviations

**Basic HTML Structure**: `!`

- Expands to a basic HTML5 boilerplate structure.

**Element with an ID**: `#header`

- Creates `<div id="header"></div>`.

**Element with a Class**: `.footer`

- Creates `<div class="footer"></div>`.

**Nested Elements**: `nav>ul>li`

- Creates a `nav` element with a `ul` inside, which itself contains a `li`.

**Sibling Elements**: `h1+p`

- Creates a `h1` followed by a `p` at the same level.

**Multiple Elements**: `ul>li*5`

- Creates an unordered list with five list items.

**Element with Custom Attributes**: `a[href='http://example.com']`

- Creates `<a href="http://example.com"></a>`.

**Element with Text**: `p{Hello World}`

- Creates `<p>Hello World</p>`.

**Item Numbering**: `ul>li.item$*3`

- Creates a list with items `<li class="item1">`, `<li class="item2">`, `<li class="item3">`.


## Setting up VS Code shortcuts

Open the keyboard shortcuts window with `Cmd + K followed by Cmd + S`.

After entering the keyboard shortcuts window, you should be able to access all of the Emmet actions by searching for `Emmet:<action>`.

Emmet:Wrap With Abbreviation

Add a shortcut to it by clicking the plus sign and entering whichever key combination you would like for that specific action. You can do the same for Remove Tag by searching for Emmet:Remove tag.

