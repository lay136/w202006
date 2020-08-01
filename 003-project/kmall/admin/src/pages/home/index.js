/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-01 17:38:14
*/
import React,{ Component,Fragment } from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'

import { actionCreators } from './store/index.js'

import AdminLayout from 'common/layout';

//容器组件
class AdminHome extends Component{
	render(){
 		return (
			<div className="AdminHome">
				<AdminLayout>
					<Breadcrumb style={{ margin: '16px 0' }}>
				        <Breadcrumb.Item>Home</Breadcrumb.Item>
				        <Breadcrumb.Item>List</Breadcrumb.Item>
				        <Breadcrumb.Item>App</Breadcrumb.Item>
				    </Breadcrumb>
					this is home page
				</AdminLayout>
			</div>
		)
	}
}
//将属性映射到组件
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminHome)