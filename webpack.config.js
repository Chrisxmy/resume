let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
     contentBase: './dist',
     hot: true
   },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src/js/*")
      },
       {
        test: /\.(css||scss)$/,
        loader: ['style-loader', 'css-loader','sass-loader'],
        include: path.resolve(__dirname, 'src/css/*')
      },
        {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/img/*'),
        options: {
          limit: 10000
        }
      },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ],
            include: path.resolve(__dirname, 'src/font2/*')
       }
    ]
  },
    plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ],
};
