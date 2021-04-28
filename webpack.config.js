const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      config: path.resolve(__dirname, 'src/config'),
    }
  },
  entry: './src',
  output: {
    filename: 'tetris.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  }), new webpack.ProgressPlugin()]
})
