const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const listRouter = require('./list');
const loginRouter = require('./login');
const regRouter = require('./reg');
const goodslistRouter = require('./goodslist');
const menuRouter = require('./menu');
const usersRouter = require('./users');
const putdataRouter = require('./putdata');
const orderRouter = require('./order');
const homeinfoRouter = require('./homeinfo');
const manageRouter = require('./manage');
const manageregRouter = require('./managereg');
// 跨域支持
// Router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

//     // 跨域请求CORS中的预请求
//     if(req.method=="OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else{
//         next();
//     }
// });


// 格式化传入的参数
Router.use(express.json(),express.urlencoded({ extended: false }));

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


// 配置路由信息
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/list',listRouter);
Router.use('/login',loginRouter);
Router.use('/reg',regRouter);
Router.use('/goodslist',goodslistRouter);
Router.use('/menu',menuRouter);
Router.use('/users',usersRouter);
Router.use('/putdata',putdataRouter);
Router.use('/order',orderRouter);
Router.use('/homeinfo',homeinfoRouter);
Router.use('/manage',manageRouter);
Router.use('/managereg',manageregRouter);
module.exports = Router;
