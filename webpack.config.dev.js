const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './views/index.js',
  ],
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'templates/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!react-icons)/],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react', 'stage-0'],
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader?sourceMap'],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000'],
      }, {
        test: /\.(eot|ttf|wav|mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite',
    },
  },
}
