# Webpack

## Introduction

- **Webpack** is a widely used tool for bundling and compiling JavaScript code.
- It can process and manipulate code, manage images, and minify code through loaders and plugins.

## Lesson Overview

- Topics:
  - Webpack documentation and usage.
  - Asset loading (CSS, images, fonts).
  - Managing output with HtmlWebpackPlugin.
  - Webpack configuration for development.

## Bundling

- Webpack creates a dependency graph and bundles into a single `.js` file in `dist`.
- Multiple entry points result in multiple output bundles.
- Non-JavaScript files (CSS, images, fonts) require specific loaders and rules.
- Example: Image optimization during build.

## Html-webpack-plugin

- Automates HTML file creation in `dist` during project build.
- Adds script tags and other elements to HTML.
- Can use a custom HTML template from `src`.
- Example configuration:

    \```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    // ...
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html',
            }),
        ],
    // ...
    \```

## Assignment

- Tutorials cover:
  - Managing website assets with webpack. <https://webpack.js.org/guides/asset-management/>
  - Installing and configuring html-webpack-plugin. <https://rapidevelop.org/webpack/setup-html-webpack-plugin>
  - Multiple entry points and output management.<https://webpack.js.org/guides/output-management/>
  - Source maps for error tracking in bundled code. <https://webpack.js.org/guides/development/>
  - `webpack-dev-server` configuration.
  - Webpack development and production modes. <https://webpack.js.org/guides/production/>
  - Introduction to webpack-merge for mode management.
- Optional exploration of advanced features like code-splitting, lazy-loading, and tree-shaking. <https://webpack.js.org/guides/>

## Knowledge Check

1. **Loading CSS**: Import `.css` files directly into JavaScript. Webpack bundles them using appropriate loaders.
2. **Loading Images**: Use specific loaders/rules to process and bundle images into `dist`.
3. **Loading Fonts**: Similar to images, fonts require specific loaders/rules for bundling.
4. **Automating HTML Builds**: Use `html-webpack-plugin` to build HTML files in `dist`.
5. **Custom HTML Template in `src`**: Configure `html-webpack-plugin` to use a custom HTML template from `src`.
6. **Error Tracking in Bundled Code**: Implement source maps to track down errors in specific source files (like `index.js`, `a.js`, `b.js`) in the bundled code.