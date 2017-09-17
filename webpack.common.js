const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    vendor: ["fullpage.js", "jquery"],
    app: path.resolve(__dirname, "src", "js", "index.js")
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[chunkhash].bundle.js",
    publicPath: ""
  },
  devServer: {
    contentBase: "/dist",
    publicPath: "/",
    disableHostCheck: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ["app", "vendor"],
      minChunks: 2
    }),
    new ExtractTextPlugin("css/[name].[hash].css"),
     new OptimizeCSSPlugin(), 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      chunks: ["app", "vendor"]
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src/js")
      },
      {
        test: /\.(css||scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader", "postcss-loader"],
          publicPath: path.resolve(__dirname, "dist", "css")
        }),
        include: path.resolve(__dirname, "src/css")
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "src/img"),
        options: {
          limit: 10000,
          name: "images/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "src/font"),
        options: {
          limit: 10000,
          name: "fonts/[name].[hash].[ext]"
        }
      }
    ]
  }
};
