/*
* @Author: Chen
* @Date:   2020-08-08 15:42:54
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-17 16:18:43
*/
var _nav = require('pages/common/nav');
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');

var _modal = require('./modal.js')

var page = {
	init:function(){
		this.shippingBox = $('.shipping-box');
		this.productBox = $('.product-box');
		//1.加载地址列表
		this.loadShippingList()
		//2.加载商品列表
		this.loadProductList()
		//3.绑定事件
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		//监听自定义事件处理新增地址成功后获取最新地址信息
		this.shippingBox.on('get-shippings',function(ev,shippings){
			_this.renderShipings(shippings);
		})
		//1.点击新增地址弹出新增地址弹出层
		this.shippingBox.on('click','.shipping-add',function(){
			_modal.show();
		})
	},
	renderShipings:function(shippings){
		var html = _util.render(shippingTpl,{
			shippings:shippings
		})
		this.shippingBox.html(html)
	},
	loadShippingList:function(){
		var _this = this
		api.getShippingsList({
			success:function(data){
				// console.log(data)
				/*
				var html = _util.render(shippingTpl,{
					shippings:data
				})
				_this.shippingBox.html(html)
				*/
				_this.renderShipings(data)
			}
		})
	},
	loadProductList:function(){
		var _this = this
		api.getOrdersList({
			success:function(data){
				// console.log(data)
				if(data.cartList.length > 0 ){
					var html = _util.render(productTpl,data)
					_this.productBox.html(html)
				}else{
					_this.productBox.html('<p class="empty-message">您没有添加商品,请去添加商品再结算!!!</p>')
				}
			},
			error:function(err){
				_this.productBox.html('<p class="empty-message">获取商品列表失败,请重试!!!</p>')
			}
		})
		
	},
}

$(function(){
	page.init();
})

