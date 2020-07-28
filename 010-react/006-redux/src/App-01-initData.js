/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-27 17:30:40
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { Input,Button,Row,Col,List } from 'antd'

import store from './store/index.js'

class App extends Component{
	constructor(props){
		super(props);
		//初始化数据
		this.state = store.getState()
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)

		// this.setState((preState)=>(store.getState()))
	}
	handleAdd(){
		const list = [...this.state.list];
		list.push(this.state.task);
		this.setState((preState)=>({
			list:list,
			task:''
		}))
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState((preState)=>({
			task:val
		}),()=>{
			// console.log(this.input)
		})
	}
	handleDel(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState(()=>({
			list:list
		}))
	}
	render(){
		return (
			<div className="App">
				<Row>
			      <Col span={20}>
			      		<Input 
							value={this.state.task}
							onChange={this.handleChange}
						/>
			      </Col>
			      <Col span={4}>
			      		<Button 
							type="primary"
							onClick={this.handleAdd}
						>
							提交
						</Button>
			      </Col>
			    </Row>
				<List
					style = {{marginTop:15}}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index) => (
						<List.Item onClick = {this.handleDel.bind(this,index)}>
						  	{item}
						</List.Item>
					)}
			    />
			</div>
		)
	}
}


export default App 