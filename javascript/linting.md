# Linting

## Style Guides

- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Google style guide](https://google.github.io/styleguide/jsguide.html)
- [JavaScript Standard Style](https://standardjs.com/rules.html).

## Linters

Linters scan code with a set of style rules and will report any errors to you that they find. They can also be set to automatically fix some of the errors for you.

The industry standard for JavaScript is [ESLint](https://eslint.org/). VS Code has an ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Here is a [guide](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code).

## Prettier

It will take your JS code and then format it according to a set of rules. Unlike a linter, it’s not looking for style errors, but specifically targeting the layout of your code and making decisions about things like spaces, indentation levels and line-breaks.

## Resolving conflicts with using ESLint and Prettier together

Using ESLint and Prettier together causes conflicts. To fix that follow the instructions to install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation). It turns off all ESLint rules that might conflict with Prettier.

Note: You might find guides on the Internet saying you should also extend stuff like "prettier/react". Since version 8.0.0 of eslint-config-prettier, all you need to extend is "prettier"! That includes all plugins.

Warning: eslint-plugin-prettier lets you run Prettier as if it were a rule in ESLint. However, doing this is not recommended.

## Template Repositories

Minimize the repetitive work of setting up ESLint and Prettier by using a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository).
