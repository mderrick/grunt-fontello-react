# fontello-react-component

Generates a react component from a [fontello](http://fontello.com/) SVG icon.
View the (very simple) [demo here](https://mderrick.github.io/fontello-react-component) 
which is built from [this](dist/entry.js).

This is work in progress. I suspect there are a lot of issues.


## Getting started

You can either download your font manually into your application or use the 
[CLI](https://github.com/paulyoung/fontello-cli) to fetch your font on build
and then use Grunt with these possible [options](#options).


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

You can see a working [Gruntfile.js](Gruntfile.js) in this repository. Simply follow [these steps](#development) to run it.


### Gulp

Gulp functionality is in progress.


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
    jsTplPath: './src/templates/view.tpl', // React component [template](src/templates) (to use your own)
    cssTplPath: './src/templates/css.tpl', // CSS [template](src/templates) (to use your own)
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
Which was built from [this](dist/entry.js) using the
[commands below](#description).


## Templates

The templates which are used to generate the output are [here](src/templates).
One uses the default CSS you get in the fontello download. The other uses modified
CSS to work with [Webpacks css-loader](https://github.com/webpack/css-loader#local-scope)
because [interoperable CSS](http://glenmaddern.com/articles/interoperable-css) is awesome
and is why I built this in the first place. They use [underscore](http://underscorejs.org/).


## Development 
- `npm install`
- `npm install grunt-cli -g`
- `grunt`
- `npm install webpack -g`
- `webpack --config=webpack.default.config.js`

Open the `dist/index.html`. Replace the font in the `font` directory to generate
another set of icons. Voila.


### TODO
- [ ] Gulp task.
- [X] Provide a template to work with webpack css modules.
- [ ] Remove lazy substring of relative path calculation.
- [ ] Better error handling, return useful errors.
- [ ] Tests
- [ ] Document the available adapters (only Fontello exists for now)
- [ ] Document the available templates