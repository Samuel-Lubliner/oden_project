# ES6 Modules

<https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html>

## Introduction

ES6 Modules are a significant feature in modern JavaScript development. They allow code to be organized and maintained more efficiently. This lesson goes beyond just the syntax of modules, delving into npm and webpack, which are essential for any JavaScript developer.

## npm (Node Package Manager)

- npm is a command-line tool that provides access to a vast repository of plugins, libraries, and tools.
- It was initially used for server-side (Node.js) development before being adopted for frontend development.
- npm helps manage project dependencies and is crucial in modern web development workflows.

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

### Core Concepts

1. **Entry and Output**:
   - "Entry" refers to the starting point file(s) for webpack.
   - "Output" is the bundled JavaScript file(s) produced by webpack.
2. **Transpiling Code**:
   - Transpiling is converting code to ensure compatibility across different environments. Tools like Babel are used in this process.

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

