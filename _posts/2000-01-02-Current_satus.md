---
layout: post
title: Current Status - Alpha 1
published: true
category: Documentation
---

# Features

- One-page site
- Content management
- Categories management
- Basic style css
- Logo, title and description : stupid management
- Basic navigation bar

## Content

You write your content and update it without probleme, make sure that your configuration is correct : one main category that match with one of your category , if you want dates for your category, add it to the configuration file.

## Style

The current style is like a default style, there no features in this version. You can modify all things by the style.css in stylesheets folder.

# Configuration

The configuration:

    project_name:
    project_description:
    project_logo:
    project_categories_with_dates:
    project_main_category:

The only things you must complete is `project_main_category` , others can be left empty

# Things are not take in charge (in this alpha) (strikethrough = avaible in dev branch)

- responsive design
- navigation decorations
- template for header disposition
- --simple color management--
- simple border management
- no footer
- --no rss/atom feed--
- SEO
