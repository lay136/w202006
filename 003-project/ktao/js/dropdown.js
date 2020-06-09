/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-09 10:12:39
*/
;(function($){
	function Dropdown($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$layer = this.$elem.find('.dropdown-layer');
		this.active = this.$elem.data('active') + '-active';

		this.timer = null;
		//2.初始化
		this.init()
	} 
	Dropdown.prototype = {
		constructor:Dropdown,
		init:function(){
			//1.初始化显示隐藏插件
			this.$layer.showHide(this.options);
			//2.监听显示隐藏事件
			this.$layer.on('show shown hide hidden',function(ev){
				this.$elem.trigger('dropdown-'+ev.type)
			}.bind(this));
			//3.绑定事件
			if(this.options.eventName == 'click'){
				//处理鼠标点击事件
				this.$elem.on('click',function(ev){
					//阻止事件冒泡
					ev.stopPropagation();
					this.show();
				}.bind(this));
				$(document).on('click',function(){
					this.hide();
				}.bind(this));

			}else{
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
			}
			
		},
		show:function(){
			//处理快速划过出发显示事件
			if(this.options.delay){
				this.timer = setTimeout(function(){
					this.$layer.showHide('show');
					//显示时添加类
					this.$elem.addClass(this.active);
				}.bind(this),this.options.delay)
			}else{
				this.$layer.showHide('show');
				//显示时添加类
				this.$elem.addClass(this.active);
			}
		},
		hide:function(){
			//清楚延迟定时器
			clearTimeout(this.timer);
			this.$layer.showHide('hide');
			//隐藏时删除类
			this.$elem.removeClass(this.active);
		}
	}

	Dropdown.DEFAULT = {
		js:true,
		mode:'fade',
		delay:200,
		eventName:''
	}


	$.fn.extend({
		dropdown:function(options){
			//1.实现隐式迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2.单例模式
				var dropdown = $elem.data('dropdown');
				if(!dropdown){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Dropdown.DEFAULT,options);
					dropdown = new Dropdown($elem,options);
					$elem.data('dropdown',dropdown);
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof dropdown[options] == 'function'){
					dropdown[options]();
				}
			})
		}
	})
})(jQuery);