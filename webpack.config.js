const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  entry: './src',
  output: {
    filename: 'tetris.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  }), new webpack.ProgressPlugin()]
})
