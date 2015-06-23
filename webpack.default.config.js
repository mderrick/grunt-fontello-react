var webpack = require('webpack'),
    path = require('path');

module.exports = function(env) {
    return {
        debug: true,
        entry: 'entry.js',
        target: 'web',
        output: {
            publicPath: '/',
            path: path.join(__dirname, './dist/app'),
            filename: 'app.js',
            chunkFilename: '[id].js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'jsx-loader?insertPragma=React.DOM'
            }]
        }
    };
};