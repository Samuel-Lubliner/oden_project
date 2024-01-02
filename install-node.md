# Installing Node.js

Node.js is a JavaScript runtime environment that allows you to run JavaScript outside of your web browser.

Right now, install it using nvm (Node Version Manager), because it makes it easy to change Node versions and upgrade Node.

There is another tool called npm (Node Package Manager) will be used later to install the various libraries and tools used in JavaScript environments.

```bash
touch ~/.zshrc

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Restart your terminal, or copy and paste the following into your terminal and press Enter:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

Test your nvm installation by running:
`nvm --version`

install the most recent stable version of Node in ‘long-term support’ (LTS)
`nvm install --lts`

Setting the Node version

`nvm use --lts`

## Node console

Interactive console which lets you run and edit your javascript code right in your terminal. Helpful to debug or test small snippets of your code quickly without opening the browser every time.

To run the Node console, open up your terminal and type `node`

Type `.exit` to quit the console.
