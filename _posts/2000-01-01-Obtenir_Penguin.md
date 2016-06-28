---
layout: post
title: Comment installer Penguin
published: true
category: Documentation
description: Cette documentation explique comment installer Penguin.
tags: [penguin, installation, gh-pages, documentation]
language: fr
---

# Obtenir ce thème

votre répertoire de projet devrait suivre un modèle de ce genre:

    /project
        /project
        /gh-pages

Cloner le dépôt GitHub

    $ git clone https://github.com/nealith/Penguin.git
    $ git clone git@github.com:nealith/Penguin.git

Créez une nouvelle branche appellée gh-pages et ajouter là comme dépôt distant :

    $ git branch gh-pages
    $ git remote add gh-pages https://github.com/user/project.git
    $ git remote set-branches gh-pages gh-pages
    $ git checkout gh-pages
    $ git pull gh-pages gh-pages

Créer un CNAME (uniquement si vous avez votre propre nom de domaine)

Pousser votre branche gh-pages

    $ git push --set-upstream gh-pages gh-pages

# Comment mettre à jour Penguin

Faites attentions au évolution du code source

Déplacez vous sur la branche gh-pages

    $ git checkout gh-pages

Et mettez la à jour avec l'une des branches suivantes

    $ git pull origin stable
    $ git pull origin dev
