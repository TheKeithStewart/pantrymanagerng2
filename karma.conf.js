module.exports = function (config) {
    var appDir = 'src/app/';
    
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },
            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
            { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watch: true },
            { pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true },
            { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },
            
            { pattern: 'karma-test-shim.js', included: true, watched: true },

            // paths loaded via module imports
            { pattern: appDir + '**/*.js', included: false, watched: true },

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: appDir + '**/*.html', included: false, watched: true },
            { pattern: appDir + '**/*.css', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            { pattern: appDir + '**/*.ts', included: false, watched: false },
            { pattern: appDir + '**/*.js.map', included: false, watched: false }
        ],
        // proxies: {
        //     // required for component assests fetched by Angular's compiler
        //     "/app/": "/base/dist/app/"
        // },
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
  
};
