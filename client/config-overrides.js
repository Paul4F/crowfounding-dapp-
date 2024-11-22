const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "path": require.resolve("path-browserify"),
        "process": require.resolve("process/browser"),
        "buffer": require.resolve("buffer/")  // Aquí se agrega el polyfill de `Buffer`
    };

    // Añadir el plugin de DefinePlugin para definir globalmente `process` y `Buffer`
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']  // Aquí se proporciona `Buffer` globalmente
        })
    ];

    return config;
};
