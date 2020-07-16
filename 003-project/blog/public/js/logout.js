/*
* @Author: Chen
* @Date:   2020-07-16 16:39:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-16 16:41:55
*/
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
		alert('请求失败,请稍后再试!!');
	})
})