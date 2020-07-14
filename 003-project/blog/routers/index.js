/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-14 09:59:33
*/
const express = require('express')
const router = express.Router()

//显示首页
router.get('/',(req,res)=>{
	res.render('main/index',{

	})
})
//显示列表页
router.get('/list',(req,res)=>{
	res.render('main/list',{
		
	})
})
//显示详情页
router.get('/detail',(req,res)=>{
	res.render('main/detail',{
		
	})
})



module.exports = router