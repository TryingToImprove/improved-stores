var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, "src/entry.js")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?playground' }
        ]
    },

    devServer: {
        inline: true
    }
}