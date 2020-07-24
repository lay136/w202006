/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 16:15:49
*/
import React,{ Component,Fragment } from 'react'
import './App.css'

class App extends Component{
	render(){
		return (
			<div>
				{
				// <input style={{ width:500 }} />
				// <button style={{ width:80 }}>提交</button>
				}
				<input className="input" />
				<button className="btn">提交</button>
			</div>
		)
	}
}


export default App 