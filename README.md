# Nimbus -- cloud frontend app
### with Skylab, soundcloud search app

Backbone, require, node, express

## Setup

First, of course, download this repo. Then, from the Terminal (assuming Node.js installed), install RequireJS.

    npm install requirejs

Next, we need an easy way to deal with dependency management. We'll use Bower, from the guys at Twitter.

    npm install bower

Let's now install the dependencies for this project. I'm assuming that we're building a Backbone project, so I've listed RequireJS, jQuery, Underscore, and Backbone as dependencies.

    bower install


## launching the node server

```
node server.js
```

Browse to [localhost:3000](http://localhost:3000/)


## doing a requirejs build

```
r.js -o src/build/app.build.js
```

TODO:
 - use gulp
 - add mongo
 - add react
 - sass
 - testing

