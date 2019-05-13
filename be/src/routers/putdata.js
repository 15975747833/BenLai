/**
 * 用户注册
 * 参数：
 * @params  username    用户名
 * @params  password    密码
 */
const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData,md5} = require('../utils');

// 集合名称
const colName = 'goods';


// 注册用户
Router.post('/',async (req,res)=>{
    let {aa}=req.body;
    console.log(aa)
    let result = {}
    try{
        result = await db.create(colName,aa);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);
});

// 检测用户是否已注册


module.exports = Router;