const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: [
    path.resolve(__dirname, 'src', 'index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
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
  },
  devServer: {
    contentBase: './',
    hot: true,
    port: 5000,
    
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}