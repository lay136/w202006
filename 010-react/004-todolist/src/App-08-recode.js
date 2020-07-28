/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-25 16:18:19
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import Item from './Item.js';

class App extends Component{
	constructor(props){
		super(props);
		//初始化数据
		this.state = {
			list:['吃饭','睡觉','敲代码'],
			task:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
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
		const val = ev.target.value;
		this.setState((preState)=>({
			task:val
		}))
	}
	handleDel(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState(()=>({
			list:list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return (
				<Item
					task = { item }
					key = { index }
					list = { this.state.list }
					index = { index }
					handleDel = { this.handleDel.bind(this,index) }
				/>
			)
		})
	}
	render(){
		return (
			<div className="App">
				<input 
					value={this.state.task}
					className="input" 
					onChange={this.handleChange}
				/>
				<button 
					className="btn"
					onClick={this.handleAdd}
				>
					提交
				</button>
				<ul className="list">
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}


export default App 