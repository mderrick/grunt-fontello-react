# fontello-react-component

Generates a react component from a [fontello](http://fontello.com/) SVG icon.
View the (very simple) demo [here](https://mderrick.github.io/fontello-react-component) 
which is built from [this](https://github.com/mderrick/fontello-react-component/blob/master/dist/entry.js).

## Getting started

You can either download your font manually into your application or use the 
[CLI](https://github.com/paulyoung/fontello-cli) to fetch your font on build
and then use either Grunt or Gulp.


### Grunt

```
module.exports = function(grunt) {
    grunt.initConfig({
        'fontello-react': {
            options: {}
        }
    });
    require('./tasks').grunt(grunt);
}
```

Then run `grunt fontello-react`.

You can see a working [Gruntfile.js](https://github.com/mderrick/fontello-react-component/blob/master/Gruntfile.js) in this repository. Simply follow [these steps](#development) to run it.


### Gulp

TODO


### Options

Paths are relative to the location of your `Gruntfile.js` or `gulpfile.js`.

```
{
    adapter: 'fontello', // Only adapter available currently
    svgPath: './font/fontello.svg', // Path to SVG
    woffPath: './font/fontello.woff', // Path to WOFF
    eotPath: './font/fontello.eot', // Path to EOT
    ttfPath: './font/fontello.ttf', // Path to TTF
    fontName: 'fontello', // Font name to use in CSS 'font-style'
    jsTplPath: './src/templates/view.tpl', // React component template (to use your own)
    cssTplPath: './src/templates/css.tpl', // CSS template (to use your own)
    jsOutputPath: './dist/components/view.js', // Location of React component output
    cssOutputPath: './dist/components/css.css' // Location of CSS output
}
```


## Usage

In your application simply require the generated component.

```
var React = require('react'),
    Icon = require('./components/view.js');

React.render(
    <Icon name="name-of-icon"/>,
    document.getElementById('content')
);
```

You can see a [demo here](https://mderrick.github.io/fontello-react-component).
Which was built from [this](https://github.com/mderrick/fontello-react-component/blob/master/dist/entry.js) using the
commands below.


## Development 
- `npm install`
- `npm install grunt-cli -g`
- `grunt`
- `npm install webpack -g`
- `webpack --config=webpack.default.config.js`

Open the `dist/index.html`. Change the font in the `font` directory to generate
another set of icons.


### TODO
- [ ] Gulp task.
- [X] Provide a template to work with webpack css modules.
- [ ] Remove lazy substring of relative path calculation.
- [ ] Better error handling, return useful errors.
- [ ] Tests
- [ ] Document the available adapters (only Fontello exists for now)
- [ ] Document the available templates