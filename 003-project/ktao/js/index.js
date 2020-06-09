/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-09 11:11:33
*/
;(function($){
/*顶部导航逻辑--------------------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		if(ev.type == 'dropdown-show'){//将要显示下拉层,加载数据
			var $this = $(this);
			var $dropdownLayer = $this.find('.dropdown-layer');
			var url = $this.data('load');
			// console.log(url);
			//如果没有数据地址则不发送请求
			if(!url) return; 
			
			//获取数据
			if(!$this.data('isLoaded')){
				console.log('will get data ....')
				$.getJSON(url,function(data){
					// console.log(data)
					var html = ''
					//动态加载数据
					for(var i = 0;i<data.length;i++){
						html += '<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
					}
					//模拟网络延迟家在数据
					setTimeout(function(){
						$dropdownLayer.html(html);
						//数据已经加载
						$this.data('isLoaded',true);
					},300)
				})
			}
			
		}
	});
	//dropdown插件测试
	/*
	$('#btn').on('click',function(ev){
		ev.stopPropagation();
		$dropdown.dropdown('show');
	})
	*/
	

/*顶部导航逻辑--------------------结束*/
})(jQuery);