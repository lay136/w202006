/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 17:27:51
*/
import React,{ Component,Fragment } from 'react'
import './App.css'

class App extends Component{
	handleClick(){
		console.log(this)
		console.log('click btn ...')
	}
	handleChange(ev){
		console.log(this);
		console.log(ev.target.value);
	}
	render(){
		return (
			<div className="App">
				<input 
					className="input" 
					onChange={this.handleChange.bind(this)}
				/>
				<button 
					className="btn"
					onClick={this.handleClick.bind(this)}
				>
					提交
				</button>
				<ul className="list">
					<li>吃饭</li>
					<li>睡觉</li>
					<li>学习</li>
				</ul>
			</div>
		)
	}
}


export default App 