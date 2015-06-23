# fontello-react-component

Generates a react component from a [fontello](http://fontello.com/) SVG icon.


## Getting started

You can either download your font manually into your application or use the 
[CLI](https://github.com/paulyoung/fontello-cli) to fetch your font on build
and then:


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

Run `grunt fontello-react`


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
    jsTplPath: './src/templates/view.tpl', // React component template
    cssTplPath: './src/templates/css.tpl', // CSS template
    jsOutputPath: './dist/view.js', // Location of React component output
    cssOutputPath: './dist/css.css' // Location od CSS output
}
```


#### TODO
- Gulp
- Provide a template to work with webpack css modules