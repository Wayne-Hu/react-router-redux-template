var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/dev-server',
            __dirname + '/src/main.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'classnames',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('../css/styles.css')
    ],
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.js?$/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            }
        ]
    },
    devtool: 'eval-source-map',
    watch: true
};