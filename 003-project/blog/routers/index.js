/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-16 10:32:58
*/
const express = require('express')
const router = express.Router()

//显示首页
router.get('/',(req,res)=>{
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	res.render('main/index',{
		userInfo:req.userInfo
	})
})
//显示列表页
router.get('/list',(req,res)=>{
	res.render('main/list',{
		userInfo:req.userInfo
	})
})
//显示详情页
router.get('/detail',(req,res)=>{
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})



module.exports = router