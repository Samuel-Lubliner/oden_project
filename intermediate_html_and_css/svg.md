# SVG

SVGs are a scalable image format, which means they will easily scale to any size and retain their quality without increasing their filesize. You can change their properties through CSS and JavaScript.

SVGs are often used for

- Icons
- Graphs/Charts
- Large, simple images
- Patterned backgrounds
- Applying effects to other elements via SVG filters

“SVG” stands for “Scalable Vector Graphics”. 

Vector graphics are images defined by math, as opposed to traditional “raster graphics”, where your image is defined by a grid of pixels. With raster graphics, the detail is limited to the size of that pixel grid.

With vector graphics on the other hand, there’s no grid. Instead, you have formulas for different shapes and lines.

SVGs are defined using XML (aka, “Extensible Markup Language”), an HTML-like syntax which is used for APIs, to RSS, to spreadsheet, word editor software, etc.

XML is human-readable.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=50 />
    <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

XML is designed to be interoperable with HTML. You can put the above code directly in an HTML file, without any changes, and it should display the image. And because these can become elements in the DOM just like HTML elements, you can target them with CSS and create them using the Element WebAPI you’ve already been using!

## Drawbacks

Inefficient at storing complex images.

Anatomy of an SVG

`xmlns` - stands for “XML NameSpace”. This specifies what dialect of XML you’re using. In our case, that dialect is the SVG language spec. Without it, some browsers will not render your image or will render it incorrectly.

`viewBox` - defines the bounds of your SVG. When you have to define the positions of different points of the elements in your SVG, this is what that’s referencing. It also defines the aspect ratio and the origin of your SVG. So it’s doing quite a lot!

`class`, `id` - these attributes function just like they do in HTML. Using these in SVGs allows you to easily target an element via CSS or JavaScript, or to reuse an element via the use element.

Elements such as `<circle>`, `<rect>`, `<path>`, and `<text>` are defined by the SVG namespace. These are our basic building-blocks. Although you can make extremely complex images with SVG, they are mostly created with just a dozen or so of these basic elements. 

Many SVG attributes, such as fill and stroke, can be changed in your CSS.

## Embedding SVGs

Linking SVGs works similar to linking any other image. You can use an HTML image element such as <img>, or link it in your CSS using background-image: url(./my-image.svg). They will still scale properly, but the contents of the SVG will not be accessible from the webpage.

The alternative is to inline your SVGs by pasting their contents directly into your webpage’s code, rather than linking to it as an image. It will still render correctly, but the SVG’s properties will be visible to your code, which will allow you to alter the image dynamically via CSS or JavaScript.

Inlining SVGs allows you to unlock their full potential, but it also comes with some serious drawbacks: it makes your code harder to read, makes your page less cacheable, and if it’s a large SVG it might delay the rest of your HTML from loading.

Some of the drawbacks of inlining SVG code can be avoided with a front-end JavaScript library like React, or a build-tool like webpack.

For now, just do whichever works best for your use-case. Linking is generally cleaner and simpler, so prefer that unless you need to tweak the SVG code alongside your HTML.

## SVG icon libraries

<https://fonts.google.com/icons>

<https://feathericons.com/>

<https://thenounproject.com/browse/icons/term/free/>

<https://ionic.io/ionicons>

<https://fontawesome.com/>

## Making your own SVGs

<https://inkscape.org/>

<https://yqnn.github.io/svg-path-editor/>

<https://affinity.serif.com/en-us/designer/>

<http://snapsvg.io/>

<https://svgjs.dev/docs/3.0>

<https://www.youtube.com/watch?v=UTHgr6NLeEw>

## Data visualization

<https://d3js.org/>

