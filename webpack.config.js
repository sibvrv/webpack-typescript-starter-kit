const path = require('path');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const configTypeScript = path.resolve(__dirname, 'tsconfig.json');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: ['vendor.ts', 'app.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TSConfigPaths()
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: configTypeScript
    })
  ]
};
