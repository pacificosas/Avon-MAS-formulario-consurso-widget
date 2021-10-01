const path = require('path')
const Dotenv = require('dotenv-webpack')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = env => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  context: path.resolve(__dirname, 'src'),
  mode: env.mode,
  devtool: env.mode === 'development' ? 'source-map' : false,
  watch: env.mode === 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new Dotenv({
      path: `.env.${env.mode}`
    })
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: '*.*',
    //       context: path.resolve(__dirname, '../public')
    //     }
    //   ]
    // })

  ]

})
