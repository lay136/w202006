/*
* @Author: Chen
* @Date:   2020-07-04 16:58:23
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-06 17:24:22
*/
;(function($){
	let $input = $('.todo-input')
	//处理添加任务逻辑
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'post',
				data:{
					task:$input.val()
				},
				dataType:'json',
				success:function(result){
					//根据后台返回数据做出不同处理
					if(result.code == 0){//成功
						const data = result.data;
						let $dom = $(`<li class="todo-item" data-id="${data.id}">${data.task}</li>`)
						$('.todo-list').append($dom);
						$input.val('');
					}else{//失败
						console.log(data.message)
					}
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	})
	//处理删除任务逻辑(由于每一项任务是动态生成,所以需要用事件代理监听事件)
	$('.todo-list').on('click','.todo-item',function(){
		var $this = $(this);
		let id = $this.data('id');
		$.ajax({
			url:'/del',
			type:'get',
			dataType:'json',
			data:{
				id:id
			},
			success:function(data){
				if(data.code == 0){
					$this.remove();
				}else{
					console.log(data.message)
				}
			},
			error:function(err){
				console.log(err);
			}
		})
	})
})(jQuery)