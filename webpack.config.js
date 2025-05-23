const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        type: "asset/source",
        include: path.resolve(__dirname, "src", "pages"),
      },
    ]
  }
}