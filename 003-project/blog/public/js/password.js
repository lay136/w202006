/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-21 16:28:31
*/
;(function($){
	var $formPassword = $('.form-password');
	$('#btn-sub-password').on('click',function(){
		//1.获取输入框数据
		var password = $formPassword.find('[name="password"]').val();
		var repassword = $formPassword.find('[name="repassword"]').val();
		//密码是3-6位任意字符
		var passwordReg = /^\w{3,6}$/i;

		//2.验证数据合法性
		if(!passwordReg.test(password)){
			$('.err').eq(0).html('密码是3-6位任意字符')
			return false
		}else{
			$('.err').eq(0).html('')
		}
		if(password != repassword){
			$('.err').eq(1).html('两次密码输入不一致');
			return false
		}else{
			$('.err').eq(1).html('')
		}
	})
})(jQuery);