---
layout: post
title: Dev Status
published: true
category: Documentation
description: Dev Status, avaible features, short documentation about customizing.
tags: [penguin, description, dev status, gh-pages, documentation]
---

# Stable ?

The current [gh-pages](http://penguin.neaworld.fr/) work under dev branch

# Features

- Single-page site
- Content management
- Categories management
- Basic style css
- Easy color management (3 differents colors)
- RSS feeds
- SEO base (meta in head and hidden sitemap)
- Logo, title and description : stupid management
- Basic navigation bar

# Configuration

All you need to customize your gh-pages is in _config.yml :

    #Penguin conf

    url: penguin.neaworld.fr

    logo: /images/logo.png
    categories_with_dates: [News]
    main_category: Documentation
    team_name: "nealith"

    content_hide: true

    defaults:
        -
            scope:
                path: "" #Don't touch :)
            values:
                title: "Penguin"
                description: "A Jekyll Simgle-Page theme for you project, simple, easy to customize !"
                tags: ["Penguin", "Jekyll", "Single-Page", "Simple", "Project", "GitHub", "gh-pages"]


    simple_color:
        enable: true #Don't touch too :)
        main_color: "#d3d3d3"
        secondary_color: "#282828"
        third_color: "#676767"


I thing this example is enough for a explanation :)

# Things will be dev

- responsive design
- navigation decorations
- template for header disposition
- simple border management
- footer
- advanced SEO
