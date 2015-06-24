module.exports = function(grunt) {

    // Example config.
    grunt.initConfig({
        'fontello-react': {
            options: {
                adapter: 'fontello',
                // Font paths just incase they differ from one another.
                svgPath: './font/fontello.svg',
                woffPath: './font/fontello.woff',
                eotPath: './font/fontello.eot',
                ttfPath: './font/fontello.ttf',
                // CSS font name.
                fontName: 'fontello',
                // Template paths.
                jsTplPath: './src/templates/default-view.tpl',
                cssTplPath: './src/templates/default-css.tpl',
                // Output paths.
                jsOutputPath: './dist/components/view.js',
                cssOutputPath: './dist/components/css.css'
            }
        }
    });

    // Requiring task weirdly because I'm exporting
    // both Gulp and Grunt tasks.
    require('./tasks').grunt(grunt);

    // By default run the task.
    grunt.registerTask('default', ['fontello-react']);
};