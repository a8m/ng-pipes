let webpack = require('webpack');
let {CheckerPlugin} = require('awesome-typescript-loader');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let pipesVersion = require('./node_modules/ng-pipes/package.json').version;

let path = require('path');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = (options) => {
  if (!options) {
    options = {};
  }

  let config = {
    devtool: 'source-map',

    resolve: {extensions: ['.ts', '.js'], modules: [root('/'), 'node_modules']},

    entry: {boot: root('boot.ts')},

    output: {path: root('/'), filename: '[name].js'},

    externals: {
      '@angular/common': 'ng.common',
      '@angular/compiler': 'ng.compiler',
      '@angular/core': 'ng.core',
      '@angular/http': 'ng.http',
      '@angular/platform-browser': 'ng.platformBrowser',
      '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
      '@angular/router': 'ng.router',
      'ng-pipes': 'ng.pipes',
      'rxjs/Rx': 'Rx',
      'zone.js': 'Zone',
      'core-js': '',
      'reflect-metadata': 'Reflect'
    },

    module: {
      rules: [
        {test: /\.js$/, enforce: 'pre', loader: 'source-map-loader'},
        {test: /\.ts$/, loader: 'awesome-typescript-loader'},
        {test: /\.json$/, loader: 'json-loader'}
      ]
    },

    plugins: [
      new CheckerPlugin(), new HtmlWebpackPlugin({
        template: 'index.ejs',
        version: pipesVersion,
        env: options.dev ? 'development' : 'production',
        host: 'localhost',
        port: 8080,
        minify: options.dev ? false : {
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeOptionalTags: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ],

    performance: {hints: options.dev ? false : 'error'},

    devServer: {
      host: 'localhost',
      port: 8080,
      historyApiFallback: true,
      watchOptions: {aggregateTimeout: 300, poll: 1000},
      headers: {'Cache-Control': 'public, max-age=31536000'}
    }
  };

  if (!options.dev) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({mangle: true}));
  }

  return config;
}
