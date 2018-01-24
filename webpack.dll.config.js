const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');   //清空dist目录下旧文件

const packageDll = [
  'antd',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
];

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  entry: {
    packageDll: packageDll,
  },
  plugins: [
    //输出目录清理
    // new CleanWebpackPlugin(['dist']),
    // new UglifyJSPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname,
    }),
  ],
};