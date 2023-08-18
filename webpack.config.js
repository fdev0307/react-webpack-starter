const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    port: 8000
  },
  plugins: [new HtmlWebpackPlugin({filename: path.resolve(__dirname, './public/index.html')})]
}