var fs = require('fs');
var webpack = require('webpack');
var path = require('path');

function isDirectory(dir) {
    return fs.lstatSync(dir).isDirectory();
}

module.exports = {
    entry: fs.readdirSync(__dirname).reduce(function(entries, dir) {
        if (dir !== "build" && isDirectory(path.join(__dirname, dir)))
            entries[dir] = path.join(__dirname, dir, "app.js");

        return entries;
    }, {}),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental&playground' }
        ]
    },

    resolve: {
        alias: {
          'improved-stores': path.resolve(__dirname, '../src/entry')
        }
    },

    devServer: {
        inline: true
    }
}