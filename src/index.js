var fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    async = require('async'),
    mkdirp = require('mkdirp');


module.exports = function(options, cb) {

    var svgString,
        jsTpl,
        cssTpl;

    /**
     * Defaults
     */
    var defaults = {
        adapter: 'fontello',
        // Font paths just incase they differ from one another
        svgPath: './font/fontello.svg',
        woffPath: './font/fontello.woff',
        eotPath: './font/fontello.eot',
        ttfPath: './font/fontello.ttf',
        // CSS font name
        fontName: 'fontello',
        // Template paths
        jsTplPath: './src/templates/default-view.tpl',
        cssTplPath: './src/templates/default-css.tpl',
        // Output paths
        jsOutputPath: './dist/components/view.js',
        cssOutputPath: './dist/components/css.css'
    };

    /**
     * Merge options and defaults
     */
    options = options || {};
    options = _.extend({}, defaults, options);

    /**
     * Load SVG
     */
    try {
        svgString = fs.readFileSync(options.svgPath, 'ascii');
    } catch(e) {
        console.log(options.svgPath + ' does not exist.');
        return;
    }

    /**
     * Load JS template
     */
    try {
        jsTpl = fs.readFileSync(options.jsTplPath).toString();
    } catch(e) {
         console.log(options.jsTplPath + ' does not exist.');
         return;
    }

    /**
     * Load CSS template
     */
    try {
        cssTpl = fs.readFileSync(options.cssTplPath).toString();
    } catch(e) {
         console.log(options.cssTplPath + ' does not exist.');
         return;
    }

    /**
     * Succes callback
     * @param  {Array}   glyphs An array of glyph objects in the format:
     *                   { 'glyph-name': 'facebook', unicode: '\e800' }
     */
    var callback = function(glyphs) {
        // Create directories just in case they do not exist.
        // TODO: Do this async using async.series. Being lazy.
        mkdirp.sync(path.dirname(options.cssOutputPath));
        mkdirp.sync(path.dirname(options.jsOutputPath));

        // TODO: Don't do the lazy substring hack and use `path.relative` as it is supposed to be used
        // http://stackoverflow.com/questions/31023972/node-path-relative-returns-incorrect-path
        async.parallel([
            function() {
                fs.writeFileSync(options.cssOutputPath, _.template(cssTpl)({
                    timestamp: new Date().getTime(),
                    svgFontPath: path.relative(options.cssOutputPath, options.svgPath).substring(1),
                    woffFontPath: path.relative(options.cssOutputPath, options.woffPath).substring(1),
                    eotFontPath: path.relative(options.cssOutputPath, options.eotPath).substring(1),
                    ttfFontPath: path.relative(options.cssOutputPath, options.ttfPath).substring(1),
                    fontName: options.fontName,
                    glyphs: glyphs
                }));
            },
            function() {
                fs.writeFileSync(options.jsOutputPath, _.template(jsTpl)({
                    cssOutputPath: path.relative(options.jsOutputPath, options.cssOutputPath).substring(1),
                    glyphs: glyphs
                }));
            }
        ], cb);
    };

    /**
     * Build the glyphs array and call success
     */
   try {
        var adapter = path.join(__dirname, 'adapters', (options.adapter + '.js'));
        require(adapter)(svgString, callback);
    } catch(e) {
        console.log(e);
    }
};
