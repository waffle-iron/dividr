const webpackConf = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers : ['Chrome'],
        singleRun : true,
        frameworks : ['mocha'],
        files : [
            'node_modules/jquery/dist/jquery.min.js',
            './tests/**/*.test.jsx'
        ],
        plugins : [
            'karma-webpack',
            'karma-sourcemap-loader'
        ],
        preprocessors : {
            './tests/**/*.test.jsx' : ['webpack', 'sourcemap']
        },
        reporters : ['mocha', 'junit'],
        junitReporter: {
            outputDir: process.env.JUNIT_REPORT_PATH,
            outputFile: process.env.JUNIT_REPORT_NAME,
            useBrowserName: false
        },
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