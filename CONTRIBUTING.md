# How to Contribute


## Start Up Instructions
1. `git clone https://github.com/leveluptuts/fresh.git`

1. `cd fresh`

1. Run `yarn` command to install dependencies in the root

1. Open a new tab in your terminal

1. `cd example`

1. Run `yarn` command to install dependencies in example

1. Run `yarn start` in the root and example

1. Browser with open to `http://localhost:3000/`


## Keeping Your Fork Up To Date

1. Clone your fork:

```
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```

2. Add remote from original repository in your forked repository:

```
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```

3. Updating your fork from original repo to keep up with their changes:

```
git pull upstream master
```