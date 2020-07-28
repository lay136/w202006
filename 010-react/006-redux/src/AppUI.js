/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 11:22:56
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { Input,Button,Row,Col,List } from 'antd'


//UI组件
/*
class AppUI extends Component{
	render(){
		return (
			<div className="App">
				<Row>
			      <Col span={20}>
			      		<Input 
							value={this.props.task}
							onChange={this.props.handleChange}
						/>
			      </Col>
			      <Col span={4}>
			      		<Button 
							type="primary"
							onClick={this.props.handleAdd}
						>
							提交
						</Button>
			      </Col>
			    </Row>
				<List
					style = {{marginTop:15}}
					bordered
					dataSource={this.props.list}
					renderItem={(item,index) => (
						<List.Item onClick = {()=>{this.props.handleDel(index)}}>
						  	{item}
						</List.Item>
					)}
			    />
			</div>
		)
	}
}
*/
const AppUI = (props)=>{
	const { task,list,handleAdd,handleChange,handleDel } = props
	return (
		<div className="App">
			<Row>
		      <Col span={20}>
		      		<Input 
						value={task}
						onChange={handleChange}
					/>
		      </Col>
		      <Col span={4}>
		      		<Button 
						type="primary"
						onClick={handleAdd}
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


export default AppUI 