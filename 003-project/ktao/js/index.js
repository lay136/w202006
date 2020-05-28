/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-28 17:12:18
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
		console.log(ev.type);
	})
	

/*顶部导航逻辑--------------------结束*/
})(jQuery);