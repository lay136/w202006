/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-25 10:53:58
*/
import React,{ Component,Fragment } from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		//初始化数据
		this.state = {
			list:['吃饭','睡觉','敲代码'],
			task:''
		}
	}
	handleAdd(){
		// console.log(this.state)
		/*
		console.log('before::',this.state)
		this.state.list.push(this.state.task);
		console.log('after::',this.state)
		*/
		// console.log(this.state)
		const list = [...this.state.list];
		list.push(this.state.task);
		// console.log(list);
		/*
			state = {
				list:['吃饭','睡觉','敲代码'],
				task:'x'
			}
		*/
		this.setState({
			list:list,
			task:''
		},()=>{
			console.log(this.state)
		})
		/*
			state = {
				list:['吃饭','睡觉','敲代码','x'],
				task:''
			}
		*/
	}
	handleChange(ev){
		// console.log(ev.target.value);
		/*
		const val = ev.target.value;
		this.state.task = val
		*/
		const val = ev.target.value;
		/*
			state = {
				list:['吃饭','睡觉','敲代码'],
				task:''
			}
		*/
		this.setState({
			task:val
		})
		/*
			state = {
				list:['吃饭','睡觉','敲代码'],
				task:'x'
			}
		*/
	}
	render(){
		return (
			<div className="App">
				<input 
					value={this.state.task}
					className="input" 
					onChange={this.handleChange.bind(this)}
				/>
				<button 
					className="btn"
					onClick={this.handleAdd.bind(this)}
				>
					提交
				</button>
				<ul className="list">
					{
						this.state.list.map((item,index)=>{
							return (
								<li key={index}>{ item }</li>
							)
						})
						//[<li>吃饭</li>,<li>睡觉</li>,<li>敲代码</li>]
					}
				</ul>
			</div>
		)
	}
}


export default App 