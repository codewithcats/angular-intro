var webpack = require('webpack');
var path = require('path');
var validate = require('webpack-validator');
var htmlPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8080
    }
};

module.exports = validate(config);
