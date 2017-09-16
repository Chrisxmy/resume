const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: ['fullpage.js'],
    app: path.resolve(__dirname, "src",'js',"index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[name].bundle.js',
    publicPath: ''
  },
   devServer: {
    contentBase: '/dist',
    publicPath: '/',
    disableHostCheck: true,
   },
    plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor',
         chunks: ['app','vendor'],
         minChunks:2
    }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      chunks: ["app",'vendor'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery'
    }),
  ],
  module: {
    rules: [
     {
    test: /\.html$/,
    use: [ {
      loader: 'html-loader',
      options: {
        minimize: true,
        removeComments: false,
        collapseWhitespace: false
      }
    }],
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
          use: ["css-loader", "sass-loader", "postcss-loader"]
        }),
        include: path.resolve(__dirname, 'src/css')
      },
        {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/img'),
        options: {
          limit: 10000
        }
      },
       {
         test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
         use: [
           'file-loader'
         ],
          include:path.resolve(__dirname, 'src/font')
       }
    ]
  },
};