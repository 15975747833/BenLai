/**
 * Webpack 的配置文件
 * gulp是基于任务的构建工具，webpack是基于配置的构建工具
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// 导出配置模块
module.exports = {
    // 设置入口文件
    entry:{
        main:'./src/app.js',
    },

    // 输出配置：上线
    output:{
       path:path.resolve(__dirname,'./dist'),
       filename:'js/[name]-bundle.js',
       // publicPath:'/fe'
   },

   // 服务器webpack-dev-server
   // 所有的文件都在内存中处理
   devServer:{
       contentBase: path.resolve(__dirname,'./src'),
       port:1901,
       host:'0.0.0.0',

       // webpack的代理服务器，只能在开发环境中使用，上线后无效
       proxy:{
           // '/api/reg' -> 'http://localhost:19011/api/reg' -> 'http://localhost:19011/reg'
           '/api/*':{
               "target": "http://193.112.60.97:19011", //目标服务器
               "changeOrigin": true,
               "pathRewrite": {
                   "^/api" : "/"
               }
           },
       }
   },

   resolve: {
       // 别名
       alias: {
           'vue$' : 'vue/dist/vue.js',
           '@':path.resolve('src'),
           '@com':path.resolve('src/components')
       },
       // 自动补全扩展名
       extensions:['.js','.vue', '.json']
   },

   // 加载器loader
   module:{
       rules:[
           {
               test:/\.vue$/,
               loader:['vue-loader']
           },
           {
               test:/\.css$/,
               use:[{
                   loader:'style-loader'
               },{
                   loader:'css-loader'
               }]
           },
           {
               test:/\.scss$/,
               use:['style-loader','css-loader','sass-loader']
           },
           {
               test:/\.(?:jpe?g|png|gif)$/,
               use:{
                   loader:'url-loader',
                   options:{
                       limit:10000,//如果图片小于10k，则转成base64
                       name: 'img/[name].[hash:8].[ext]'
                   }
               }
           },
           // 字体图标处理
           {
               test: /\.(?:woff2?|eot|ttf|otf)(?:\?.*)?$/,
               loader: 'url-loader',
               options: {
                 limit: 10000,
                 name: 'fonts/[name].[hash:7].[ext]'
               }
           },
       ]
   },

   plugins:[
       // 依据html模板生成一个自动引用你打包后的文件（js或css）的新的html页面
       new HtmlWebpackPlugin({
           template:'./src/template.html'
       }),

       // new HtmlWebpackPlugin({
       //     template:'./src/template.html',
       //     filename:'cart.html'
       // }),

       // Vue-loader 15.x之后的版本都需要伴随 VueLoaderPlugin， 否则报错
       new VueLoaderPlugin(),
   ]
}