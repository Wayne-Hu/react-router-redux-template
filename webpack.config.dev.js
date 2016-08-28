var webpack = require('webpack');
var merge = require('webpack-merge');

module.exports = {
    output: {
        path: __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        __dirname + '/src/main.js'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                test: /\.js?$/,
                loaders: ['react-hot', 'babel-loader']
            }
        ]
    },
    watch: true
};