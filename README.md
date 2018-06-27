# Syna Start

This is a sample project that can be used to jump start your Syna project. It uses Syna theme and Hugo with sample files that introduce two simple pages, one for landing and one for the about page.

To start your blog run the following commands:

**Development**:
```
$ hugo server -D
```

**Production**:
```
$ hugo
```

> Prerequisites: GoLang, Hugo

## Directory Structure

We're using the standard directory structure using content pages.

```
├─ content/
|  └ _global/ # All global fragments are located in this directory
|  └ _index/ # Landing page is in this directory and it's url is changed to **/**.
|  └ about/ # About page
├ layouts/ # You can add extra layout files here. A sample custom fragment is available as a sample.
├ static/ # Your static files are in this directory. Mostly images directory is needed when using Syna.
├ themes/ # Hugo uses this directory as a default to look for themes. Syna theme is a git submodule available in this directory.
├ .gitignore
├ .gitmodules
├ config.toml # Hugo config file containing general settings and menu configs.
```

Please read [Syna's documentation](https://github.com/okkur/syna/tree/master/docs) to understand how to add fragments and change page data.
