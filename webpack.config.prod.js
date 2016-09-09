var webpack = require('webpack');

module.exports = {
    output: {
        path: __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    entry: {
        index: [
            __dirname + '/src/main.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'classnames',
            'redux',
            'redux-saga',
            'react-redux',
            'react-router',
            'react-router-redux',
            'babel-polyfill'
        ]
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.js?$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    devtool: 'eval',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};