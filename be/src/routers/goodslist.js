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
const colName = 'goods';


Router.get('/',async (req,res)=>{
    let {category,type,hotsale,goodsNum} = req.query;
    let canshu = {}
    if(category){
        canshu.category = category
    }
    if(type){
        canshu.type = type
    }
    if(hotsale){
        canshu.hotsale = true
    }
    if(goodsNum){
        canshu.goodsNum = goodsNum
    }
   
    console.log('category:',category)
    console.log('type:',type)
    let result = {}
    try{
        result = await db.find(colName,canshu);
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