/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-13 11:37:33
*/
;(function($){
	function init($elem){
		this.$elem = $elem;
		this.$elem.removeClass('transition');
		this.currentX = parseFloat(this.$elem.css('left'));
		this.currentY = parseFloat(this.$elem.css('top'));
	}
	function to(x,y,callback){
		//处理x和y方法参数问题
		x = (typeof x == 'number') ? x : this.currentX;
		y = (typeof y == 'number') ? y : this.currentY;
		//每次移动前判断是是否到达目标值
		if(this.currentX == x && this.currentY == y) return ;
		//移动前执行事件
		this.$elem.trigger('move');
		typeof callback == 'function' && callback();

		//更新坐标值
		this.currentX = x;
		this.currentY = y;
	}


	function Slient($elem){
		init.call(this,$elem);
	}
	Slient.prototype = {
		constructor:Slient,
		to:function(x,y){
			to.call(this,x,y,function(){
				this.$elem.css({
					left:x,
					top:y
				});
				//移动后执行事件
				this.$elem.trigger('moved');
			}.bind(this))
		},
		x:function(x){
			this.to(x)
		},
		y:function(y){
			this.to(null,y)
		}
	}

	function Js($elem){
		init.call(this,$elem);
	}
	Js.prototype = {
		constructor:Js,
		to:function(x,y){
			to.call(this,x,y,function(){
				this.$elem
				.stop()
				.animate({
					left:x,
					top:y
				},function(){
					//移动后执行事件
					this.$elem.trigger('moved');
				}.bind(this))
			}.bind(this))
		},
		x:function(x){
			this.to(x)
		},
		y:function(y){
			this.to(null,y)
		}
	}

	//如果不传递配置信息则有默认配置信息
	var DEFAULT = {
		js:true,
	}

	//获取移动方法
	function getmove($elem,options){
		var move = null;
		if(options.js){
			move = new Js($elem);
		}else{
			move = new Slient($elem);
		}
		// console.log(move)
		// console.log()
		return {
			to:move.to.bind(move),
			x:move.x.bind(move),
			y:move.y.bind(move)
		};
	}

	$.fn.extend({
		move:function(options,n1,n2){
			//1.实现隐式迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				var moveObj = $elem.data('moveObj');
				//单例模式
				if(!moveObj){
					//合并配置信息
					options = $.extend({},DEFAULT,options);
					//2.获取显示隐藏的方法
					var moveObj = getmove($elem,options);
					//将显示隐藏方法存到当前dom节点上
					$elem.data('moveObj',moveObj);
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof moveObj[options] == 'function'){
					//调用显示隐藏方法时必须传入jQuery对象
					moveObj[options](n1,n2);
				}
			})
		}
	})
})(jQuery);