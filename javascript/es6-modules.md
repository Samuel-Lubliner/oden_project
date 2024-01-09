# ES6 Modules
<https://www.theodinproject.com/lessons/node-path-javascript-es6-modules>

<https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html>

## Introduction

ES6 Modules allow code to be organized and maintained more efficiently.

## npm (Node Package Manager)

- npm is a command-line tool that provides access to a vast repository of plugins, libraries, and tools.
- It was initially used for server-side (Node.js) development before being adopted for frontend development.
- npm helps manage project dependencies

### Key Concepts

1. **Initializing a Project**:
   - `npm init` creates a `package.json` file, containing project metadata and dependencies.
2. **Installing Packages**:
   - Use `npm install [package-name]` to add packages to your project.
3. **Development Dependencies**:
   - Development dependencies are listed under `devDependencies` in `package.json`. These are essential for development but not for production.

## Webpack and Module Bundlers

- Webpack is a module bundler for JavaScript applications.
- It processes and bundles JavaScript files and their dependencies.

<https://webpack.js.org/concepts/>

<https://webpack.js.org/guides/getting-started/>

<https://docs.npmjs.com/cli/v10/configuring-npm/package-json>

<https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin>

"Entry" refers to the starting point file(s) for webpack.

"Output" is the bundled JavaScript file(s) produced by webpack.

`src` is our source directory. `src` is where we write all of the code that webpack is going to bundle up for us.

When webpack runs, it goes through all of our files starting at any entry points we give it, looks for any import statements and then compiles all of the code we need to run our site into a single file per entry point inside of the `dist` folder (short for distribution).

In this example, we have a single entry point `/src/index.js`. The output file is the compiled version `dist/main.js`.

Adjust our package.json file in order to make sure we mark our package as private, as well as removing the main entry. This is to prevent an accidental publish of your code.

Warning: Do not compile untrusted code with webpack. It could lead to execution of malicious code on your computer, remote servers, or in the Web browsers of the end users of your application.

## ES6 Modules

Use babel to convert modules for browsers that don't support them

- ES6 modules offer an efficient way to organize code into reusable components.
- They use `import` and `export` statements to share code between different files.

```js
// a file called functionOne.js
const functionOne = () => console.log('FUNCTION ONE!');

export { functionOne };
```

```js
// another JS file
import { functionOne } from './functionOne';

functionOne(); // this should work as expected!
```

There are many benefits to writing code in modules such as code reuse.

There are also the same benefits as when using factory functions or the module pattern (the module pattern and ES6 modules are not the same things; this naming convention is frustrating). With the introduction of ES6 Modules, the module pattern (IIFEs) is not needed anymore, though you might still encounter them.

When using ES6 modules, only what is exported can be accessed in other modules by importing. Additionally, any declarations made in a module are not automatically added to the global scope. By using ES6 modules, you can keep different parts of your code cleanly separated, which makes writing and maintaining your code much easier and less error-prone. Keep in mind that you can export constructors, classes and factory functions from your modules.

### Types of Exports

1. **Named Exports**:
   - Allow multiple exports per module. Import using the exact names.
2. **Default Exports**:
   - Allow a single export per module, used as the default import.

## Additional Tools

- **Task Runners**: Tools like Gulp and Grunt automate repetitive tasks in development.
- **npm Automation Scripts**: Defined in `package.json` to automate various development tasks.
