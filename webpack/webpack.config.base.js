const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  context: path.resolve(__dirname, '../src'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    clean: true
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ],

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**/*.*',
          context: path.resolve(__dirname, '../public')
        }
      ]
    })

  ]

}
