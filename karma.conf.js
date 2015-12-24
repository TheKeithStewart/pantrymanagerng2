module.exports = function (config) {
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
            { pattern: 'app/**/*.js', included: false, watched: true },

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: 'app/**/*.html', included: false, watched: true },
            { pattern: 'app/**/*.css', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            { pattern: 'app/**/*.ts', included: false, watched: false },
            { pattern: 'app/**/*.js.map', included: false, watched: false }
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
    
    
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine'],
//     files: [
//       {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
//       {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
//       {pattern: 'node_modules/angular2/bundles/testing.js', included: true, watched: true},

//       {pattern: 'karma-test-shim.js', included: true, watched: true},

//       // paths loaded via module imports
//       {pattern: 'dist/**/*.js', included: false, watched: true},

//       // paths loaded via Angular's component compiler
//       // (these paths need to be rewritten, see proxies section)
//       {pattern: 'dist/**/*.html', included: false, watched: true},
//       {pattern: 'dist/**/*.css', included: false, watched: true},

//       // paths to support debugging with source maps in dev tools
//       {pattern: 'dist/**/*.ts', included: false, watched: false},
//       {pattern: 'dist/**/*.js.map', included: false, watched: false}
//     ],
//     proxies: {
//       // required for component assests fetched by Angular's compiler
//       "/app/": "/base/dist/app/"
//     },
//     exclude: [],
//     preprocessors: {},
//     reporters: ['progress'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ['Chrome'],
//     singleRun: false
//     });
  
};
