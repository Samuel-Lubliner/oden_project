# Git

## Three States

Git has three main states that your files can reside in:

Modified:
You have changed the file but have not committed it to your database yet.

Staged:
You have marked a modified file in its current version to go into your next commit snapshot.

Committed:
The data is safely stored in your local database.

## Three main sections of a Git project

The working tree, staging area, and Git directory.

Working tree:
Single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify.

Staging area or (“index”):
a file, in your Git directory, that stores information about what will go into your next commit.

Git directory
where Git stores the metadata and object database for your project. This is what is copied when you clone a repository from another computer.

## Basic Git workflow

1. Modify files in your working tree.

2. Selectively stage just those changes you want to be part of your next commit.

3. Do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

## Set up git locally

Make sure git version is 2.28 or later. The default branch name changed from master to main.

Set your local default git branch to main.

`git config --global init.defaultBranch main`

## Clone a remote repository onto local machine

On GitHub click the green “Code” button. Copy the SSH option.

Create a directory called repos

`git clone <SSH URL>` 

`cd` into repo then enter git remote -v

This displays the URL of the remote repository

“origin” is the default for the remote repository

## Create a new file

`touch hello_world.txt`

`git status`

red text means that this file is not staged

Note: Never git add, commit, or push sensitive information to a remote repository. Use environment variables for sensitive information.

## Add file to the staging area

`git add <filename>`

Green text after `git status` means that this file is now in the staging area.

`git commit -m "Add hello_world.txt”`

`git status` “Your branch is ahead of ‘origin/main’ by 1 commit”

This means local has newer snapshots than remote repository.

`git log` shows an entry for the commit with details on the author, date and time.

open the directory in Visual Studio Code by using the command `code .`

Modify the file and save.

`git add .` adds all files in the current directory and all subsequent directories to the staging area.

## Push work to remote repository

`git push origin main`

## The basic Git syntax

`<program> <action> <destination>`

## Atomic Commit

Includes changes related to only one feature or task of your program.

- easy to revert a specific change without losing other changes
- enables you to write better commit messages

More resources:

Complete Git and GitHub Tutorial from Basics to Advanced - by Kunal Kushwaha <https://www.youtube.com/watch?v=apGV9Kg7ics>

Git - Reference <https://git-scm.com/docs>
