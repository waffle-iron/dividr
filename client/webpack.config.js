/*
 ./webpack.config.js
 */

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['./app/App.jsx', './app/styles/app.scss'],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: path.resolve('dist'),
        filename: 'app_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1'
            })},
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery'
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: 'public/[name].bundle.css',
            allChunks: true,
        }),
    ],
    resolve: {
        alias: {
            Components : path.resolve(__dirname, 'app/components/')
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        proxy: {
            "/api/v1": "http://localhost:3001"
        }
    },
    devtool: 'source-map'
};