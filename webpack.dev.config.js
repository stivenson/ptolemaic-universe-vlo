const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'game.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.ts', '.js' ],
    alias: {
      pixi: path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      phaser: path.join(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
      p2: path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader' },
      { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js$/, loader: 'expose-loader?p2' },
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' }
    ]
  },
  plugins: [
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/images/space-background.png', to: 'assets/images/space-background.png' },
      { from: './src/assets/images/earth.png', to: 'assets/images/earth.png' },
      { from: './src/index.css', to: 'index.css' },
      { from: './src/index.html', to: 'index.html' }
    ])
  ]
};
