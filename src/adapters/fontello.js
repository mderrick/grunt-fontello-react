var parseString = require('xml2js').parseString;

module.exports = function(svgString, cb) {
	// xml2js seems to all the break unicode characters so change them
    // here before we parse it.
    svgString = svgString.replace(new RegExp('(?:&#x)(.*)(?:;)', 'g'), '\\$1');

	parseString(svgString, function (err, result) {
	    var _glyphs = result.svg.defs[0].font[0].glyph,
	        glyphs = [];

	    _glyphs.forEach(function(glyph) {
	        glyphs.push(glyph['$']);
	    });

	    cb(glyphs);
	});
};