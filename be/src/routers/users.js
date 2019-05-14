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
const colName = 'users';


Router.get('/',async (req,res)=>{

    let result = {}
    try{
        result = await db.find(colName);
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
    console.log("正在执行删除用户操作")

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

Router.put('/',async (req,res)=>{//req.body=>{price,size,nmae}
console.log("正在进行个人信息更新操作")

    let {username} = req.body;
    let {params} = req.body;
    let aa = {username}
    let data = params;

    // 遍历修改属性，并写入查询
    // for(let key in req.body){
    //     data[key] = req.body[key];
    // }
    
    let result;
    try{
        console.log("进入更新阶段=",aa,data)
        result = await db.update(colName,aa,data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

module.exports = Router;