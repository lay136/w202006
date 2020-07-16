/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-16 17:31:16
*/
const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');

//管理员权限验证
router.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!</h1>')
	}
})


//显示后台管理员首页
router.get('/',(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})
//显示用户列表
router.get('/users',(req,res)=>{
	//查询数据库获取用户信息
	UserModel.find({},'-password -__v')
	.then(users=>{
		console.log(users)
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:users
		})
	})
	.catch(err=>{
		console.log(err)
	})
	
})




module.exports = router