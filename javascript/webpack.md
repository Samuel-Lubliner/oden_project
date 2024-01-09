# Webpack

Webpack is the go-to tool across the web for bundling your modules. Another amazing feature is webpack’s ability to process and manipulate your code as it bundles.

Webpack can also manage your images and compress and optimize them for use on the web. Webpack can minify and uglify your code.

If you give webpack a file as an entry point, it will build a dependency graph based on all the imports/exports starting there, before bundling everything into a single `.js` file in `dist`. If you needed it to output multiple bundles, then each entry point you give Webpack will produce its own output bundle.

Bundling JavaScript is fairly straightforward.

For CSS, you can import your `.css` file directly into your JavaScript and for assets like images, they might be used inside your CSS or imported directly into your JavaScript. When you tell Webpack to bundle your files, it will come across these files and try to bundle them together or process any assets like images and copy them into `dist`.

Since these sorts of files are not JavaScript, Webpack requires including the correct loaders and rules.

## Html-webpack-plugin

Automatically builds an HTML file in dist for us when we build our project. It will also then automatically add certain things to the HTML like our output bundle in a script tag.

If we had our own `dist/index.html` then it would be overwritten! In order to preserve our own HTML, we can tell it to use a template and provide a path to our own HTML file that is in `src`.

```js
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');

// ...
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
// ...
```
