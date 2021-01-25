var webpack = require("webpack");
var merge = require("webpack-merge");
var apiUrl = "http://localhost:3000";
var baseConfig = require("./webpack.base.config");
var path = require("path");


const devConfiguration = function(env, argv) {
  const NODE_ENV = "development";
  return {
    devtool: "source-map",

    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      publicPath: "/",
      proxy: {
        "/api": {
          target: argv.API_URL || apiUrl,
        }
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.env.BASE_URL": JSON.stringify("/")
      })
    ]
  };
};

module.exports = ( env, argv ) => {
  return merge(baseConfig(env, argv ),devConfiguration(env, argv));
}  
