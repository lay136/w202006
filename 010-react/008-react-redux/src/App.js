/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 09:54:38
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { Input,Button,Row,Col,List } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'

import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction,
	getLoadDataAction,
	getRequestLoadDataAction
} from './store/actionCreator.js'

//容器组件
class App extends Component{
	componentDidMount(){
		this.props.handleInit();
	}
	render(){
		const { task,list,handleChange,handleAdd,handleDel } = this.props
 		return (
			<div className="App">
				<Row>
			      <Col span={20}>
			      		<Input 
							value={task}
							onChange = {handleChange}
						/>
			      </Col>
			      <Col span={4}>
			      		<Button 
							type="primary"
							onClick = {handleAdd}
						>
							提交
						</Button>
			      </Col>
			    </Row>
				<List
					style = {{marginTop:15}}
					bordered
					dataSource={list}
					renderItem={(item,index) => (
						<List.Item onClick = {()=>{handleDel(index)}}>
						  	{item}
						</List.Item>
					)}
			    />
			</div>
		)
	}
}
//将属性映射到组件
const mapStateToProps = (state)=>{
	return {
		task:state.task,
		list:state.list
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(ev)=>{
			const val = ev.target.value
			dispatch(getChangeItemAction(val))
		},
		handleAdd:()=>{
			dispatch(getAddItemAction())
		},
		handleDel:(index)=>{
			dispatch(getDelItemAction(index))
		},
		handleInit:()=>{
			dispatch(getRequestLoadDataAction())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(App)