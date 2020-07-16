/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-16 15:32:17
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
				password:hmac(password),
				// isAdmin:true
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

//处理用户登录逻辑
router.post('/login',(req,res)=>{
	//1.获取参数信息
	const { username,password } = req.body;
	//2.查询数据库是否有该用户
	UserModel.findOne({username:username,password:hmac(password)},'-password')
	.then(user=>{
		if(user){//数据库有该用户验证通过
			//用户登录成功生成cookie信息
			// req.cookies.set('userInfo',JSON.stringify(user),{maxAge:1000*60*60*24});
			req.session.userInfo = user;


			res.json({
				code:0,
				message:'登录成功',
				user:user
			})
		}else{//验证失败
			res.json({
				code:10,
				message:'用户名和密码不正确'
			})
		}
	})
	.catch(err=>{
		console.log(err)
		res.json({
			code:10,
			message:'数据库操作失败,请稍后再试'
		})
	})
})

//处理用户退出
router.get('/logout',(req,res)=>{
	//清除cookie
	// req.cookies.set('userInfo',null);
	req.session.destroy()

	res.json({
		code:0,
		message:'退出成功'
	})
})




module.exports = router