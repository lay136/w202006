/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 15:52:28
*/
import React,{ Component,Fragment } from 'react'

//一个组件只能够返回一个DOM节点
class App extends Component{
	render(){
		//注释
		/*注释*/
		// return <Fragment><input /><button>提交</button></Fragment>
		return (
			
			<Fragment>
				<input />
				{
					//我是注释 
				}
				<button>提交</button>
			</Fragment>
		)
	}
}


export default App 