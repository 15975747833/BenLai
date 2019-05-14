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
const colName = 'orderlist';


// 注册用户
Router.post('/',async (req,res)=>{
    let {buyer,orderNum,gdArr} = req.body;
    console.log('提交订单',orderNum,gdArr)
    let result = {}
    try{
        result = await db.create(colName,{buyer,orderNum,gdArr,time:Date.now()});
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);
});

Router.get('/',async (req,res)=>{
    let buyer
    let canshu = {}
    console.log("req.query=",req.query)
    if(req.query.buyer){
        buyer = req.query.buyer;
        canshu = {
            buyer
        }
    }
    
    console.log("app查看个人订单=",canshu)
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

Router.delete('/',async (req,res)=>{
    console.log("正在执行订单操作")

    let query = req.query;
    console.log("req.params=",req.params)
    console.log("req.body=",req.body)
    console.log("req.query=",req.query)
    
    let result = {}
    try{
        console.log("删除query=",query)
        result = await db.delete(colName,query);
    }catch(err){
        result = formatData()
    }

    res.send(result);
})

module.exports = Router;