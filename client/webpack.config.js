/*
 ./webpack.config.js
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './app/App.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'app_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            Components : path.resolve(__dirname, 'app/components/')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        proxy: {
            "/api/v1": "http://localhost:3001"
        }
    },
    devtool: 'source-map'
};