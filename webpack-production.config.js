var WebpackStrip = require("strip-loader"),
	devConfig = require("./webpack.config.js");

devConfig.module.loaders.push({ test: /\.js$/, loader: WebpackStrip.loader('debug', 'console.log') });

module.exports = devConfig;
