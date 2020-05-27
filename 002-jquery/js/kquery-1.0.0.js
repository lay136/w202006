/*
* @Author: Chen
* @Date:   2020-05-22 17:14:40
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-25 16:44:09
*/
;(function(w){
	function kQuery(selector){
		return new kQuery.prototype.init(selector);
		// return new kQuery();
	} 
	kQuery.fn = kQuery.prototype = {
		constructor:kQuery,
		init:function(selector){
			// console.log('1::',this)
			//1.传入布尔值是false
			if(!selector){
				return this;
			}
			//2.传入函数
			else if(kQuery.isFunction(selector)){
				this[0] = document;
				this.context = document;
				this.length = 1;
				window.addEventListener('DOMContentLoaded',selector);
				return this;
			}
			//3.传入字符串
			else if(kQuery.isString(selector)){
				//3.1 传入代码片段
				if(kQuery.isHtml(selector)){
					var temDom = document.createElement('div');
					temDom.innerHTML = selector;
					for(var i = 0;i<temDom.children.length;i++){
						this[i] = temDom.children[i];
					}
					this.length = temDom.children.length;
					return this;
				}
				//3.2 传入选择器
				else{
					var doms = document.querySelectorAll(selector);
					for(var i = 0;i<doms.length;i++){
						this[i]  = doms[i];
					}
					this.length = doms.length;

					return this;
				}
			}
			//4.传入数组
			else if(kQuery.isArray(selector)){
				for(var i = 0;i<selector.length;i++){
					this[i] = selector[i]
				}
				this.length = selector.length;
				return this;
			}
			//5.对象(其他)
			else{
				this[0] = selector;
				this.length = 1;
				return this;
			}
		},
		get:function(index){
			//传入参数
			if(index || index == 0){
				// 传入数字
				if(kQuery.isNumber(index)){
					if(index >= 0){
						return this[index]
					}else{
						// 0 1 2
						// -1 -2 -3  + 3
						return this[index + this.length];
					}
				}
				// 不是数字
			}
			//不传参
			else{
				var arr = []
				for(var i = 0;i<this.length;i++){
					arr[i] = this[i];
				}
				return arr;
			}
		}
	}

	kQuery.extend = kQuery.prototype.extend = function(options){
		for(key in options){
			this[key] = options[key];
		}
	}

	//定义静态方法
	kQuery.extend({
		isFunction:function(str){
			return typeof str == 'function';
		},
		isString:function(str){
			return typeof str == 'string';
		},
		isHtml:function(str){
			return /<[^<>]+>/.test(str); 
		},
		isArray:function(str){
			return typeof str == 'object' && length in str;
		},
		isNumber:function(str){
			return typeof str == 'number';
		}
	})
	/*
	kQuery.isFunction = function(str){
		return typeof str == 'function';
	}
	kQuery.isString = function(str){
		return typeof str == 'string';
	}
	kQuery.isHtml = function(str){
		return /<[^<>]+>/.test(str); 
	}
	kQuery.isArray = function(str){
		return typeof str == 'object' && length in str;
	}
	kQuery.isNumber = function(str){
		return typeof str == 'number';
	}
	*/



	kQuery.fn.init.prototype = kQuery.fn

	w.kQuery = w.$ = kQuery;
})(window);