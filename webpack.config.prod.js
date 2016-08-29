var webpack = require('webpack');
var HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: __dirname + '/build/js',
        filename: '[chunkhash:8].bundle.js'
    },
    entry: __dirname + '/src/main.js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebPlugin({
            filename: '../index.html',
            title: 'Title',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_modules)/,
                test: /\.js?$/,
                loaders: ['babel-loader']
            }
        ]
    }
};