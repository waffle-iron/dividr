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
    entry: [
        './app/App.jsx',
        './app/styles/app.scss',
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.js'
    ],
    externals: {
        foundation: 'Foundation'
    },
    output: {
        path: path.resolve('public'),
        filename: 'app_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader?importLoaders=1'})},
            { test: /\.(sass|scss)$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
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