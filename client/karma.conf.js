const webpackConf = require('./webpack.config');

module.exports = function (config) {
    config.set({
        browsers : ['Chrome'],
        singleRun : true,
        frameworks : ['mocha'],
        files : [
            'node_modules/jquery/dist/jquery.min.js',
            './tests/**/*.test.jsx'
        ],
        preprocessors : {
            './tests/**/*.test.jsx' : ['webpack', 'sourcemap']
        },
        reporters : ['mocha'],
        client : {
            mocha : {
                timeout : '5000'
            }
        },
        webpack : webpackConf,
        webpackServer : {
            noInfo : true
        }
    });
};