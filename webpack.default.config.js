var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: './dist/entry.js',
    target: 'web',
    output: {
        publicPath: 'app/',
        path: path.join(__dirname, './dist/app'),
        filename: 'app.js',
        chunkFilename: '[id].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM'
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url?limit=1'
        }]
    }
};