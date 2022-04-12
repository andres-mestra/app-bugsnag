/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const NODE_ENV = `${process.env.NODE_ENV}`
const pathEnv = NODE_ENV ? `.env.${NODE_ENV}` : '.env'

const copyPreload = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, 'main', 'preload.js'),
      to: path.resolve(__dirname, '.webpack', 'electron'),
    },
  ],
})

module.exports = {
  target: 'electron-main',
  devtool: 'source-map',
  mode: 'none',
  entry: './main/index.ts',
  output: {
    path: path.resolve(__dirname, '.webpack', 'electron'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [
    new Dotenv({
      path: pathEnv,
    }),
    copyPreload,
  ],
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
}
