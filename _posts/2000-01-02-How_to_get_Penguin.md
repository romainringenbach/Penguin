---
layout: post
title: How to get Penguin
published: true
category: Documentation
---

You project folder organization should be like this:

    /project
        /project
        /gh-pages

Clone the repository

    $ git clone https://github.com/nealith/Penguin.git
    $ git clone git@github.com:nealith/Test-penguin.git

Create a new branch for your project called gh-pages and add it as remote repository :

    $ git remote add gh-pages https://github.com/user/project.git
    $ git remote set-branches gh-pages gh-pages
    $ git checkout gh-pages
    $ git pull gh-pages gh-pages

Create CNAME file

Push your github-page

    $ git push --set-upstream gh-pages gh-pages





