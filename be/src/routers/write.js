var express = require('express');
var router = express.Router();
const request = require('request');
const formidable = require('formidable')
var path = require('path');

const db = require('../db');
const {
    formatData
} = require('../utils');

const colName = 'casual';


router.post('/imgurl', async (req, res) => {

    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = path.join(__dirname, '../public/headerLogo/')
    form.parse(req, async (err, fields, files) => {

        let data = fields
        data.imgurl = files.file.path
        data.imgurl = data.imgurl.match(/headerLogo.*/)
        // res.json({
        //     code: 1,
        //     message: 'upload success'
        // })
        let result;
        try {
            result = await db.create(colName,data);
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
})
// 增加
router.post('/', async (req, res) => {
    let data = req.body;

    let result;
    try {
        result = await db.create(colName, data);
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


// 获取商品信息
router.route('/:id')

    .get(async (req, res) => {
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

    .delete(async (req, res) => {
        let {
            id
        } = req.params;

        let result;
        try {
            result = await db.delete(colName, {
                _id: id
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

    // 修改商品
    .put(async (req, res) => { //req.body=>{price,size,nmae}

        let {
            id
        } = req.params;
        let data = {};

        // 遍历修改属性，并写入查询
        for (let key in req.body) {
            data[key] = req.body[key];
        }
        let result;
        try {
            result = await db.update(colName, {
                goods_id: id
            }, data);
            console.log(result)
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

module.exports = router;