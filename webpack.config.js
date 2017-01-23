var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ng-pipes.umd.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  module: {rules: [{test: /\.ts$/, loader: 'awesome-typescript-loader'}]},
  externals: {'@angular/core': 'ng.core'}
}
