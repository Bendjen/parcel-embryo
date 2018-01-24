
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');  //html动态加载静态资源
var CleanWebpackPlugin = require('clean-webpack-plugin');   //清空dist目录下旧文件
var webpack = require('webpack');

var path = require("path");
module.exports = {
    //source-map：报错调试
    devtool: 'eval-source-map',

    entry: {
        // polyfills: './src/polyfills.js',   //增强ES6支持
        main: path.resolve(__dirname, './src/entry.js'), //唯一入口文件
        // vendor: [ 'antd', 'redux', 'react-router', 'react-redux', 'redux-devtools', 'prismjs', 'rc-queue-anim']
    },

    output: {
        path: path.resolve(__dirname, 'dist'), //打包后的文件存放的地方
        publicPath :path.resolve(__dirname, 'dist'),
        filename: 'app.all.js' //打包后输出文件的文件名 enrty是对象格式的时候，name就不能写成固定值，因为会有多个输出js文件
    },

    //这个参数用来将通过外链引入的库可以以模块方式在JS文件中引入
    externals : {
        // "react" : "React",
        // "react-dom" : "ReactDOM",
        // "classnames" : "classNames",
        // "antd" : "antd"
    },
    resolve: {
        alias: {
            "@components": path.join(__dirname, "./src/components"),
            "@menu": path.join(__dirname, "./src/menu"),
            "@img": path.join(__dirname, "./img"),
            "@utils": path.join(__dirname, "./src/utils"),
        }
    },

    //模块解析器配置
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",           //babel的所有依赖必须得都升级到6x版本才不会报错
                        query: {
                            plugins: ['transform-runtime', ["import", {
                                "libraryName": "antd",
                                "style": "css",   // or 'css' 
                            }]],            //减少ES6部分重复代码
                            presets: ['es2015', 'stage-0', 'react'],   //.代替balbelrc
                        }
                    },
                ], include: /src/
            },
            {
                test: /\.css$/,
                // include: /src/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",   //样式基础
                    use: [
                        {
                            loader: 'css-loader',
                            options: {           //开启cssModule 注意：低版本的css-loader不支持webpack2的modules写法
                                modules: false,
                                sourceMap: true,
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        },

                        { loader: 'postcss-loader' }     //补全前缀
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: /src/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {           //开启cssModule 注意：低版本的css-loader不支持webpack2的modules写法
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[local]_[hash:base64:5]'
                        }
                    },
                    'sass-loader',
                    'postcss-loader'

                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    //如果在package.json中再 --hot --inline就会出错
    devServer: {
        // contentBase: path.join(__dirname, "./"),  //本地服务器所加载的页面所在的目录
        port: 5200,
        hot: true,
        inline: true,
    },

    plugins: [
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./dist/packageDll-manifest.json')
        //   }),
        //输出目录清理
        // new CleanWebpackPlugin(['dist']),
        //单独打包出css
        new ExtractTextPlugin("app.all.css"),
        //生成动态引入资源的html
        // new HtmlWebpackPlugin({
        //     title: 'Bendjen',
        //     // favicon: path.resolve(__dirname, './img/react.png'),
        //     filename: path.resolve(__dirname, './dist/index.html'),     //index位置要和输出的静态资源放在一起
        //     template: path.resolve(__dirname, './template.html'),
        // }),
        new webpack.HashedModuleIdsPlugin(), //当js内有引用改动时，第三方库vender的hash值也会变化，因为module_id的变化，这个插件就是用来防止这种情况        
        //这个模块本身是用来把多个JS都引用的共同部分会打包出一份
        //可以在entry中指定打包第三方库
        //当name在entry未指定时会自动打包出同名的第三方包
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        new webpack.NamedModulesPlugin(),   //热加载改动模块名
        new webpack.HotModuleReplacementPlugin()    //热加载
    ],

}
