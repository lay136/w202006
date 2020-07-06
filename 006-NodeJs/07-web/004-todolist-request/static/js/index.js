/*
* @Author: Chen
* @Date:   2020-07-04 16:58:23
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-06 11:38:02
*/
;(function($){
	$('.todo-input').on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'post',
				data:{
					task:$('.todo-input').val()
				},
				dataType:'json',
				success:function(data){
					console.log(data)
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	})
})(jQuery)