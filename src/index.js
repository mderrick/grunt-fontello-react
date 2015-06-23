var fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    async = require('async');


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
        jsTplPath: './src/templates/view.tpl',
        cssTplPath: './src/templates/css.tpl',
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
        async.parallel([
            function() {
                fs.writeFileSync(options.cssOutputPath, _.template(cssTpl)({
                    timestamp: new Date().getTime(),
                    svgFontPath: path.relative(options.cssOutputPath, options.svgPath),
                    woffFontPath: path.relative(options.cssOutputPath, options.woffPath),
                    eotFontPath: path.relative(options.cssOutputPath, options.eotPath),
                    ttfFontPath: path.relative(options.cssOutputPath, options.ttfPath),
                    fontName: options.fontName,
                    glyphs: glyphs
                }));
            },
            function() {
                fs.writeFileSync(options.jsOutputPath, _.template(jsTpl)({
                    cssOutputPath: path.relative(options.jsOutputPath, options.cssOutputPath),
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
