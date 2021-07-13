import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration as WebpackConfiguration, DefinePlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const webpackConfig = (): Configuration => ({
  entry: "./src/index.tsx",
  ...(process.env.production || !process.env.development
    ? {}
    : { devtool: "eval-source-map" }),

  resolve: {
    // alias: {
    //   'react': path.resolve(__dirname, './node_modules/react'),
    //   'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    // },
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js",
    // library: "reactCryptoIcons",
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
  // externals: {
  //   // Don't bundle react or react-dom      
  //   "react": {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "React",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "ReactDOM",
  //     root: "ReactDOM",
  //   },
  // },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: "./public/index.html",
    }),
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
  ],
});

export default webpackConfig;