const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { sourceMapsEnabled } = require("node:process");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: "src/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.sass$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@use "/styles/shared" as *\n`,
            },
          }
        ],
      },
      {
        test: /\.html$/i,
        use: { 
          loader: "html-loader",
          options: { minimize: false }
        },
        include: path.resolve(__dirname, "src", "pages"),
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: "asset/resource",
      }
    ]
  },
  resolve: {
    roots: [path.resolve(__dirname, "src")],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
}