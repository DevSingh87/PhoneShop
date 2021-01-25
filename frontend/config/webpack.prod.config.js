var webpack = require("webpack");
var merge = require("webpack-merge");
//var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var baseConfig = require("./webpack.base.config");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
/* eslint-disable */


module.exports = ( env, argv ) => {
  var isDevelopmentMode = ( argv.mode === "development" );
  var devtool = isDevelopmentMode
  ? "eval-source-map"
  : "nosources-source-map";
  var moduleIdentifierPlugin = isDevelopmentMode
  ? new webpack.NamedModulesPlugin()
  : new webpack.HashedModuleIdsPlugin()
;
return merge(baseConfig(env, argv ),{
  mode: 'production',
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].bundle.js"
  },

  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: Infinity,
    },
    minimize: true
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /(\.css|\.js|\.svg)$/,
      cache: false,
      minRatio: 1,
      threshold: 0
    }),
  ]
});
}