/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 11:13:05
*/
import React,{ Component,Fragment } from 'react'
import './index.css'
import { Input,Button,Row,Col,List } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'

import { actionCreators } from './store/index.js'

//容器组件
class Todolist extends Component{
	componentDidMount(){
		this.props.handleInit();
	}
	render(){
		const { task,list,handleChange,handleAdd,handleDel } = this.props
 		return (
			<div className="Todolist">
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
	console.log(state)
	return {
		task:state.todolist.task,
		list:state.todolist.list
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(ev)=>{
			const val = ev.target.value
			dispatch(actionCreators.getChangeItemAction(val))
		},
		handleAdd:()=>{
			dispatch(actionCreators.getAddItemAction())
		},
		handleDel:(index)=>{
			dispatch(actionCreators.getDelItemAction(index))
		},
		handleInit:()=>{
			dispatch(actionCreators.getRequestLoadDataAction())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Todolist)