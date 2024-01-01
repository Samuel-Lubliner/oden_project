# Setting up VScode, Git, and GitHub

## Opening files in VSCode from the command line

Open the Command Palette and then type `shell command`.

Select `Shell Command: Install 'code' command in PATH`.

## Install Homebrew

From the terminal, run:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Follow Homebrew's next steps to add Homebrew to PATH.

## Update Git

`brew install git`

`git --version`

Make sure Git version is at least 2.28.

If necessary, run

`brew doctor`
`brew cleanup`

## Configure Git and GitHub

```
git config --global user.name "Your Name"
git config --global user.email "yourname@example.com"

git config --global init.defaultBranch main

git config --global pull.rebase false

echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

### SSH Key

Check if Ed25519 algorithm SSH key is already installed

`ls ~/.ssh/id_ed25519.pub`

To create a new SSH key:

`ssh-keygen -t ed25519 -C "your@email.com"`

### Link your SSH key with GitHub

Create new New SSH Key on GitHub

Copy your public SSH key.

`cat ~/.ssh/id_ed25519.pub`

Paste the key into GitHub.

### Testing your key

`$ ssh -T git@github.com`
