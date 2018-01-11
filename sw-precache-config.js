module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/manifest.json',
        '/node_modules/redux/dist/redux.min.js',
        '/bower_components/webcomponentsjs/webcomponents-loader.js'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__)/]
};