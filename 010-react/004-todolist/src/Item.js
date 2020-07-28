/*
* @Author: Chen
* @Date:   2020-07-25 11:23:31
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-27 11:05:54
*/
import React,{ Component,Fragment } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:'Tom',
			age:18
		}
	}
	componentWillUnmount(){
		//在卸载组件之前做一些清理工作
		console.log('Item componentWillUnmount ...')
	}
	render(){
		const { handleDel,task } = this.props
		return (
			<li onClick = { handleDel }>{ task }</li>
		)
	}
}
//类型检查
Item.propTypes = {
	handleDel:PropTypes.func,
	task:PropTypes.string.isRequired
}
//定义默认值
Item.defaultProps = {
	task:'learn react'
}

export default Item;