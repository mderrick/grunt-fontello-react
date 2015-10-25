# grunt-fontello-react

Generates a react component from a [fontello](http://fontello.com/) SVG icon.
View the [demo here](https://mderrick.github.io/fontello-react-component).

## Getting started

You can either download your font manually into your application or use the 
[CLI](https://github.com/paulyoung/fontello-cli) to fetch your font on build
and then use Grunt with these possible [options](#options).


### Grunt

```
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-fontello-react');
    grunt.initConfig({
        'fontello-react': {
            options: {}
        }
    });
}
```

Then run `grunt fontello-react`.

You can see a working [Gruntfile.js](Gruntfile.js) in this repository. Simply follow [these steps](#development) to run it.


### Options

Paths are relative to the location of your `Gruntfile.js`.

```
{
    adapter: 'fontello', // Only adapter available currently
    svgPath: './font/fontello.svg', // Path to SVG
    woffPath: './font/fontello.woff', // Path to WOFF
    eotPath: './font/fontello.eot', // Path to EOT
    ttfPath: './font/fontello.ttf', // Path to TTF
    fontName: 'fontello', // Font name to use in CSS 'font-style'
    jsTplPath: './src/templates/custom-js.tpl', // React component template (to use your own)
    cssTplPath: './src/templates/custom-css.tpl', // CSS tempalte (to use your own)
    jsOutputPath: './dist/components/view.js', // Location of React component output
    cssOutputPath: './dist/components/css.css' // Location of CSS output
}
```


## Usage

In your application simply require the generated component.

```
var React = require('react'),
    Icon = require('./the/output/component.js');

// CSS may need to be included seperately if using the non CSS module template.

React.render(
    <Icon name="name-of-icon"/>,
    document.getElementById('content')
);
```

## Templates

The templates which are used to generate the output are [here](src/templates).
One uses the default CSS you get in the fontello download. The other uses modified
CSS to work with [Webpacks css-loader](https://github.com/webpack/css-loader#local-scope).
They use [underscore](http://underscorejs.org/).


## Development 
- `npm install`
- `npm install grunt-cli -g`
- `grunt`
- `npm install webpack -g`
- `webpack --config=webpack.default.config.js`

Open the `dist/index.html`.