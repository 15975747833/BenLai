/**
 * 用户注册
 * 参数：
 * @params  username    用户名
 * @params  password    密码
 */
const express = require('express');
const Router = express.Router();
const request = require('request');
const formidable = require('formidable')
var path = require('path');

const db = require('../db');
const {formatData} = require('../utils');


const colName = 'users';

Router.post('/',async (req,res)=>{
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = path.join(__dirname, '../public/headerLogo/')
    form.parse(req, async (err, fields, files) => {
        let data = fields
        let {user} = data
        data.imgurl = files.file.path
        data.imgurl = data.imgurl.match(/headerLogo.*/)
        if(user){
            let result;
            try{
                console.log("进入头像更新阶段=",user,data)
                result = await db.update(colName,{username:user},{imgurl:data.imgurl});
                result = formatData({data:result})
            }catch(err){
                result = formatData({status:400,msg:err})
            }
            res.send(result);
        }
        // try {
        //     result = await db.create(colName,data);
        //     result = formatData({
        //         data: result
        //     })
        // } catch (err) {
        //     result = formatData({
        //         status: 400,
        //         msg: err
        //     })
        // }
        // res.send(result);
    })
});


Router.get(async (req, res) => {
    let {
        id
    } = req.params;

    let result;
    try {
        result = await db.find(colName, {
            id: id
        })
        result = formatData({
            data: result
        })
    } catch (err) {
        result = formatData({
            status: 400,
            msg: err
        })
    }
    res.send(result);
})


module.exports = Router;