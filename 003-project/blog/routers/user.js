/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-14 16:31:25
*/
const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const hmac = require('../util/hmac.js');

//处理用户注册逻辑
router.post('/register',(req,res)=>{
	//1.获取参数信息
	const { username,password } = req.body;
	//2.数据同名验证
	UserModel.findOne({username:username})
	.then(user=>{
		if(user){//数据库有该用户不能注册同名用户
			res.json({
				code:10,
				message:'该用户已经被注册,请重新注册'
			})
		}else{//数据库没有同名记录可以注册
			//3.验证通过插入数据
			UserModel.insertMany({
				username:username,
				password:hmac(password)
			})
			.then(result=>{
				res.json({
					code:0,
					message:'注册成功',
					user:result
				})
			})
			.catch(err=>{
				console.log(err)
				res.json({
					code:10,
					message:'数据库操作失败,请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err);
		res.json({
			code:10,
			message:'数据库操作失败,请稍后再试'
		})
	})
	
})




module.exports = router