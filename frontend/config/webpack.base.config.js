/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require('path');
const lessToJS = require("less-vars-to-js");
const fs = require("fs");

  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, "../src/styles/theme.less"), "utf8"),
  );
  // // fix: prevents error when .less files are required by node
  // if (typeof require !== "undefined") {
  //   require.extensions[".less"] = file => {};
  // }

module.exports =  ( env, argv ) =>{
  var devMode = ( argv.mode !== "production" );
  var devtool = devMode
        ? "eval-source-map"
        : "nosources-source-map"
    ;
    // var moduleIdentifierPlugin = devMode
    //     ? new webpack.NamedModulesPlugin()
    //     : new webpack.HashedModuleIdsPlugin()
    // ;
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: "styles",
  //         test: /(\.css|\.scss)$/,
  //         chunks: "all",
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  return ({
  devtool: devtool,
  module: {
    noParse: /node_modules\/lodash\/lodash\.js/,
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /(\.css|\.scss)$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader!sass-loader"
      //   })
      // },
      {
        test: /(\.css|\.scss)$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars:  themeVariables, // make your antd custom effective
            }
          }
        ]
      },
      // {
      //   test: /\.less$/,
      //   loader: 'less-loader', // compiles Less to CSS
      // },

      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "./images/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _ : [path.resolve(__dirname, '../src/utils/lodash_custom'),'default']
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      // favicon: "../public/favicon.ico",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    // moduleIdentifierPlugin
  ]
})
};
