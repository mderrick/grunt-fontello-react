var build = require('./../src/index');

module.exports = function(grunt) {
    grunt.registerTask('fontello-react', 'Builds a react component for Fontello fonts.', function() {
        var done = this.async();
        build(this.options(), done);
    });
};
