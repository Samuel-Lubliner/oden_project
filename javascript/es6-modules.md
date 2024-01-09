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


## ES6 Modules

- ES6 modules offer an efficient way to organize code into reusable components.
- They use `import` and `export` statements to share code between different files.

### Types of Exports

1. **Named Exports**:
   - Allow multiple exports per module. Import using the exact names.
2. **Default Exports**:
   - Allow a single export per module, used as the default import.

## Additional Tools

- **Task Runners**: Tools like Gulp and Grunt automate repetitive tasks in development.
- **npm Automation Scripts**: Defined in `package.json` to automate various development tasks.

