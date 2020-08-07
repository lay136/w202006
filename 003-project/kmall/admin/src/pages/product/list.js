/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-07 15:47:03
*/
import React,{ Component,Fragment } from 'react'
import './index.css'
import { Breadcrumb,Table, Divider, Tag,Button,Input,InputNumber,Switch } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import { 
	Link ,
} from "react-router-dom"

import { actionCreators } from './store/index.js'

import AdminLayout from 'common/layout';

//容器组件
class ProductList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const columns = [
			{
				title: '商品名称',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '是否首页显示',
				dataIndex: 'isShow',
				key: 'isShow',
				render:(isShow,record)=>{
					return (
						<Switch 
							checkedChildren="是" 
							unCheckedChildren="否" 
							defaultChecked={isShow=='0' ? false : true}
							onChange={(checked)=>{
								const isShow = checked ? '1' : '0'
								handleUpdateIsShow(record._id,isShow)
							}}
						/>
					)
				}
			},
			{
				title: '上架/下架',
				dataIndex: 'status',
				key: 'status',
				render:(status,record)=>{
					return (
						<Switch 
							checkedChildren="上架" 
							unCheckedChildren="下架" 
							defaultChecked={status=='0' ? false : true}
							onChange={(checked)=>{
								const status = checked ? '1' : '0'
								handleUpdateStatus(record._id,status)
							}}
						/>
					)
				}
			},
			{
				title: '是否热卖',
				dataIndex: 'isHot',
				key: 'isHot',
				render:(isHot,record)=>{
					return (
						<Switch 
							checkedChildren="是" 
							unCheckedChildren="否" 
							defaultChecked={isHot=='0' ? false : true}
							onChange={(checked)=>{
								const isHot = checked ? '1' : '0'
								handleUpdateIsHot(record._id,isHot)
							}}
						/>
					)
				}
			},
			{
				title: '排序',
				key: 'order',
				dataIndex: 'order',
				render: (order,record) => {
					return (
						<InputNumber 
							defaultValue={order}
							onBlur={(ev)=>{
								if(name != ev.target.value){
									handleUpdateOrder(record._id,ev.target.value)
								}
							}}
						/>
					)
				}
			},
			{
				title:'操作',
				render:(name,record)=>{
					return (
						<span>
							<Link to={'/product/save/'+record._id}>编辑</Link>
							<Divider type="vertical" />
							<Link to={'/product/detail/'+record._id}>详情</Link>
						</span>
					)
				}
			}
		];
		const { 
			list,
			current,
			pageSize,
			total,
			handlePage,
			isFetching ,

			handleUpdateIsShow,
			handleUpdateOrder,
			handleUpdateStatus,
			handleUpdateIsHot,
		} = this.props;
		const dataSource = list.toJS()
		// console.log(dataSource)
 		return (
			<div className="ProductList">
				<AdminLayout>
					<Breadcrumb style={{ margin: '16px 0' }}>
				        <Breadcrumb.Item>首页</Breadcrumb.Item>
				        <Breadcrumb.Item>商品管理</Breadcrumb.Item>
				        <Breadcrumb.Item>商品列表</Breadcrumb.Item>
				    </Breadcrumb>
				    <div className="btn">
				    	<Link to="/product/save"><Button type="primary btn-add">新增商品</Button></Link>
				    </div>
					<div className="content">
						<Table 
							columns={columns} 
							dataSource={dataSource} 
							loading={isFetching}
							rowKey="_id"
							pagination={{
								total:total,
								pageSize:pageSize,
								current:current
							}}
							onChange={(page)=>{
								handlePage(page.current)
							}}
						/>
					</div>
				</AdminLayout>
			</div>
		)
	}
}
//将属性映射到组件
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		list:state.get('product').get('list'),
		current:state.get('product').get('current'),
		pageSize:state.get('product').get('pageSize'),
		total:state.get('product').get('total'),
		isFetching:state.get('product').get('isFetching'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreators.getPageAction(page))
		},
		handleUpdateIsShow:(id,newIsShow)=>{
			dispatch(actionCreators.getUpdateIsShowAction(id,newIsShow))
		},
		handleUpdateOrder:(id,newOrder)=>{
			dispatch(actionCreators.getUpdateOrderAction(id,newOrder))
		},
		handleUpdateStatus:(id,newStatus)=>{
			dispatch(actionCreators.getUpdateStatusAction(id,newStatus))
		},
		handleUpdateIsHot:(id,newIsHot)=>{
			dispatch(actionCreators.getUpdateIsHotAction(id,newIsHot))
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList)