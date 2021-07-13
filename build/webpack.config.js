"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const tsconfig_paths_webpack_plugin_1 = __importDefault(require("tsconfig-paths-webpack-plugin"));
const webpack_1 = require("webpack");
const webpackConfig = () => ({
    entry: "./src/index.tsx",
    ...(process.env.production || !process.env.development
        ? {}
        : { devtool: "eval-source-map" }),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new tsconfig_paths_webpack_plugin_1.default({ configFile: "./tsconfig.json" })],
    },
    output: {
        path: path_1.default.join(__dirname, "build"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: "./public/index.html",
        }),
        new webpack_1.DefinePlugin({
            "process.env": process.env.production || !process.env.development,
        }),
        new fork_ts_checker_webpack_plugin_1.default({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            },
        }),
    ],
});
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map