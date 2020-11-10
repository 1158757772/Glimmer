const express = require('express')

const firstPageHead = require('../db/models/firstPageHeadModel')

const router = express.Router()

// 查询首页头部导航
/**
 * @api {get} /firstPage/getFirstPageHead 获得首页头部导航
 * @apiGroup firstPage
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '查询成功'
 *    datList:[]
 * }
 */

router.get('/getFirstPageHead', (req, res) => {
  firstPageHead.find()
    .then((data) => {
      res.send({ err: 0, msg: '查询成功', datList: data })
    })
    .catch(() => {
      res.send({ err: -2, msg: '商品添加失败' })
    })
})

module.exports = router
