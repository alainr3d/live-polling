"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [{
            exclude: /(node_modules|app-server.js)/,
            loader: 'babel'
        }]
    }
};
module.exports = exports["default"];