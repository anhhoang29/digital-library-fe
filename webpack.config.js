const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    // ...
    plugins: [
        new NodePolyfillPlugin()
    ],

    resolve : {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
        }
    }
};

// Path: digital-library-fe/src/index.js