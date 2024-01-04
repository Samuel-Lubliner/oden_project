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

## VSCode Shortcuts

Type `?` into the input field to get a list of available commands you can execute from here

`⇧ ⌘ P` Command Palette

`⌘ .` Quick Fix

`⌥ click` Insert cursor

`⌥ ⌘ ↑` Insert cursor above

`⌥ ⌘ ↓` Insert cursor below

`⌘ U` Undo last cursor operation

`⇧ ⌥ I` Insert cursor at end of each line selected

`⌘ L` Select current lie

`⌘ F` Find

`⌥ ⌘ F` Replace

`⇧ ⌘ T` Reopen closed editor

`⌘ K P` Copy path of active file

`⇧ ⌘ V` Open Markdown preview

``⌃` `` Show integrated terminal

``⌃⇧` ``  Create new terminal

`⇧ ⌥ F` format document

`⌘ P` Quick Open

`⌘ P` will let you navigate to any file or symbol by typing its name

`⌃ Tab` will cycle you through the last set of files opened

`⇧ ⌘ P` will bring you directly to the editor commands

`⇧ ⌘ O` will let you navigate to a specific symbol in a file

`⌃ G` will let you navigate to a specific line in a file

`Cmd + /` comment code

The gear icon (More Actions... ⇧F9) opens a context menu with options to reset the setting to its default value as well as copy the setting ID or JSON name-value pair.

Open the Settings Editor (⌘,)
To check which settings you have configured, there is a @modified filter in the Search bar.

Go to Definition
If a language supports it, you can go to the definition of a symbol by pressing F12.

If you press Ctrl and hover over a symbol, a preview of the declaration will appear:

Ctrl Hover

Tip: You can jump to the definition with Ctrl+Click or open the definition to the side with Ctrl+Alt+Click.

## VSCode Resources

<https://code.visualstudio.com/docs>

<https://code.visualstudio.com/docs/getstarted/introvideos>

<https://code.visualstudio.com/docs/getstarted/tips-and-tricks>

<https://code.visualstudio.com/docs/editor/debugging>

<https://code.visualstudio.com/docs/nodejs/nodejs-tutorial>

<https://code.visualstudio.com/docs/introvideos/productivity>

<https://code.visualstudio.com/docs/editor/userdefinedsnippets>

<https://code.visualstudio.com/docs/editor/emmet>

<https://code.visualstudio.com/docs/languages/javascript>

<https://code.visualstudio.com/docs/languages/ruby>

## Github resources

<https://skills.github.com/>