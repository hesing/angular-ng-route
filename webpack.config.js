var path = require("path");
var webpack = require("webpack");
// var TimestampWebpackPlugin = require("timestamp-webpack-plugin");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("shared.js");

module.exports = {
    context: path.resolve("public/js"),
    entry: "./main",
    output: {
        path: path.resolve("build/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=10000' // => DataUrl if "file.png" is smaller that 10kb
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style!css!autoprefixer"
        }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer!sass'
      }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // new TimestampWebpackPlugin({
        //     path: __dirname,
        //     filename: "timestamp.json"
        // }),
        new webpack.BannerPlugin("******************\nCreated By Hemant\n******************")
    ]
};
