const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: [
    path.resolve(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {loose: true, modules: false}],
            'react',
            'react-hmre'
          ],
          'plugins': [
            'transform-object-rest-spread'
          ]
        }
      }]
    }]
  }
}