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
