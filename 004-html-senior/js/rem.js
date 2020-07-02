/*
* @Author: Chen
* @Date:   2020-06-19 16:44:29
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-19 17:23:13
*/
;(function(win,doc){
	//1.获取根元素
	var oRoot = document.getElementsByTagName('html')[0];
	function refresh(){
		//2.获取视口宽度
		var iWidth = document.body.clientWidth || document.documentElement.clientWidth ;
		//3.根据比例计算根元素字体大小
		var oWidth = iWidth / 10;
		oRoot.style.fontSize = oWidth + 'px';
		console.log(iWidth)
	}
	win.addEventListener('DOMContentLoaded',refresh,false);
	win.addEventListener('load',refresh,false);
	win.addEventListener('resize',refresh,false);
})(window,document);