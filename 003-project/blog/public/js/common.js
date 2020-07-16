/*
* @Author: Chen
* @Date:   2020-07-14 10:54:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-16 16:39:38
*/
;(function($){
	//1.登录注册面板切换
	$userInfo = $('#user-info');
	$userRegister = $('#register');
	$userLogin = $('#login');
	//1.1 登录 => 注册
	$('#go-register').on('click',function(){
		//隐藏登录面板
		$userLogin.hide()
		//显示注册面板
		$userRegister.show();
	})
	//1.2 注册 => 登录
	$('#go-login').on('click',function(){
		//隐藏注册面板
		$userRegister.hide()
		//显示登录面板
		$userLogin.show();
	})

	//2.用户注册逻辑
	//用户名是以字母开头的3-10位包含数字字母和下划线
	var usernameReg = /^[a-z][a-z0-9_]{2,9}$/i;
	//密码是3-6位任意字符
	var passwordReg = /^\w{3,6}$/i;
	$('#sub-register').on('click',function(){
		//2.1 获取注册信息
		var username = $userRegister.find("[name='username']").val();
		var password = $userRegister.find("[name='password']").val();
		var repassword = $userRegister.find("[name='repassword']").val();
		var $err = $userRegister.find('.err');
		var errMsg = ''
		//2.2 验证数据合法性
		//验证用户名
		if(!usernameReg.test(username)){
			errMsg = '用户名是以字母开头的3-10位包含数字字母和下划线'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位任意字符'
		}
		//验证重复密码
		else if(password != repassword){
			errMsg = '两次密码输入不一致'
		}
		//验证通过
		else{
			errMsg = ''
		}
		//2.3 验证通过发送ajax请求
		if(errMsg){
			$err.html(errMsg);
		}else{
			$err.html('');
			//发送ajax
			$.ajax({
				url:'/user/register',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				// console.log(data)
				if(data.code == 0){//注册成功
					$err.html('');
					$('#go-login').trigger('click');
				}else{
					$err.html(data.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败,请稍后再试!!');
			})
		}
	})
	//3.用户登录逻辑
	$('#sub-login').on('click',function(){
		//3.1 获取注册信息
		var username = $userLogin.find("[name='username']").val();
		var password = $userLogin.find("[name='password']").val();
		var $err = $userLogin.find('.err');
		var errMsg = ''
		//3.2 验证数据合法性
		//验证用户名
		if(!usernameReg.test(username)){
			errMsg = '用户名是以字母开头的3-10位包含数字字母和下划线'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位任意字符'
		}
		//验证通过
		else{
			errMsg = ''
		}
		//3.3 验证通过发送ajax请求
		if(errMsg){
			$err.html(errMsg);
		}else{
			$err.html('');
			//发送ajax
			$.ajax({
				url:'/user/login',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				if(data.code == 0){//登录成功
					/*
					$userInfo.find('span').html(data.user.username)
					$userLogin.hide();
					$userInfo.show();
					*/
					window.location.reload();
				}else{//登录失败
					$err.html(data.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败,请稍后再试!!');
			})
		}
	})
	/*
	//4.用户退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			if(data.code == 0){
				window.location.href = '/';
			}
		})
		.fail(function(err){
			$userInfo.find('.err').html('请求失败,请稍后再试!!');
		})
	})
	*/
	
})(jQuery)