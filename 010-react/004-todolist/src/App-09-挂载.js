/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-27 10:03:00
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import Item from './Item.js';

class App extends Component{
	constructor(props){
		console.log("App constructor")
		super(props);
		//初始化数据
		this.state = {
			list:['吃饭','睡觉','敲代码'],
			task:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(props, state){
		//一般就是通过props改变更新state数据
		console.log('getDerivedStateFromProps::props::',props)
		console.log('getDerivedStateFromProps::state::',state)
		console.log('App static getDerivedStateFromProps(props, state)');
		//返回的对象会和state进行合并并是生成新的state
		/*
			{
				list:['吃饭','睡觉','敲代码'],
				task:''
			}
			{
				task:'xxx'
			}
			newState = {
				list:['吃饭','睡觉','敲代码'],
				task:'xxx'
			}
		*/
		// return {
		// 	task:'xxx'
		// }
		return null
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
		// console.log(this.input)
		const val = this.input.value
		this.setState((preState)=>({
			task:val
		}),()=>{
			console.log(this.input)
		})
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
	componentDidMount(){
		//一般等到页面加载完毕发送ajax请求
		console.log('App componentDidMount')
	}
	render(){
		console.log('App render ')
		return (
			<div className="App">
				<input 
					ref = {(input)=>{this.input = input}}
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