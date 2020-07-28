/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 10:42:54
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { Input,Button,Row,Col,List } from 'antd'

import store from './store/index.js'

/*
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
} from './store/actionTypes.js'
*/

import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction
} from './store/actionCreator.js'

class App extends Component{
	constructor(props){
		super(props);
		//初始化数据
		this.state = store.getState()
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		// console.log(store)
		store.subscribe(() => {
			this.setState(store.getState())
		})
	}
	handleAdd(){
		/*
		const list = [...this.state.list];
		list.push(this.state.task);
		
		this.setState((preState)=>({
			list:list,
			task:''
		}))*/
		//派发action
		/*
		const action = {
			type:ADD_ITEM
		}
		store.dispatch(action)
		*/
		store.dispatch(getAddItemAction())
	}
	handleChange(ev){
		const val = ev.target.value
		//派发action
		/*
		const action = {
			type:CHNAGE_ITEM,
			payload:val
		}

		store.dispatch(action)
		*/
		store.dispatch(getChangeItemAction(val))
	}
	handleDel(index){
		/*
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState(()=>({
			list:list
		}))
		*/
		//派发action
		/*
		const action = {
			type:DEL_ITEM,
			payload:index
		}
		store.dispatch(action)
		*/
		store.dispatch(getDelItemAction(index))
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