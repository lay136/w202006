/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 16:29:04
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { Input,Button,Row,Col,List } from 'antd'
import AppUI from './AppUI.js'
import axios from 'axios'

import store from './store/index.js'

import {
	getChangeItemAction,
	getAddItemAction,
	getDelItemAction,
	getLoadDataAction,
	getRequestLoadDataAction
} from './store/actionCreator.js'

//容器组件
class App extends Component{
	constructor(props){
		super(props);
		//初始化数据
		this.state = store.getState()
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
		store.subscribe(() => {
			this.setState(store.getState())
		})
	}
	componentDidMount(){
		/*
		//发送ajax请求获取数据
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			store.dispatch(getLoadDataAction(result.data))
		})
		.catch(err=>{
			console.log(err);
		})
		*/
		store.dispatch(getRequestLoadDataAction())
	}
	handleAdd(){
		store.dispatch(getAddItemAction())
	}
	handleChange(ev){
		const val = ev.target.value
		store.dispatch(getChangeItemAction(val))
	}
	handleDel(index){
		store.dispatch(getDelItemAction(index))
	}
	render(){
		const { task,list } = this.state
		return (
			<AppUI
				task = { task }
				list = { list }
				handleChange = { this.handleChange }
				handleAdd = { this.handleAdd }
				handleDel = { this.handleDel }
			/>
		)
	}
}


export default App 