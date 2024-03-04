# ES

ES6, also known as ECMAScript 2015, is a significant update to JavaScript released in 2015. It introduced many new features aimed at making JavaScript coding more efficient and cleaner.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) support all ES6 features and most of ES7.

Older browsers, like Internet Explorer, lag in adopting these updates, posing compatibility issues.

## Solution: Babel

[Babel](http://babeljs.io/) is a tool that transpiles modern JavaScript (including ES6+) into code that older browsers can understand.

It can be integrated into a project via the command line or through webpack configuration.

While most modern browsers support ES6, keeping abreast of JavaScript's evolution and using tools like Babel ensures compatibility and the ability to leverage new features early on.

Follow the instructions [here](https://github.com/babel/babel-loader) to install the babel-loader and use it with webpack.

Read [this article](https://blog.jakoblind.no/babel-preset-env/) to better understand presets and plugins in Babel. It will also show you how to target specific browser versions you want to support.
