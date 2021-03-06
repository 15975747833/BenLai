/**
 * 列表渲染
 * 参数：
 * @params  username    用户名
 * @params  password    密码
 */
const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData} = require('../utils');

// 集合名称
const colName = 'homeinfo';


Router.get('/',async (req,res)=>{
    let {type} = req.query;
    console.log('首页请求数据type:',type)
    let result = {}
    try{
        result = await db.find(colName,{type:type});
        if(result.length>0){
            // result = formatData(result,{status:400})
        }else{
            result = formatData()
        }
    }catch(err){
        result = formatData()
    }

    res.send(result);
})

module.exports = Router;