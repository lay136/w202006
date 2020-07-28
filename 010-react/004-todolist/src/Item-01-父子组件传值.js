/*
* @Author: Chen
* @Date:   2020-07-25 11:23:31
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-25 15:16:15
*/
import React,{ Component,Fragment } from 'react'

class Item extends Component{
	constructor(props){
		super(props);
	}
	handleDelete(){
		// console.log(this.props)
		/*
		this.props.list.splice(this.props.index,1);
		console.log(this.props.list)
		*/
		console.log(this.props)
	}
	render(){
		return (
			<li onClick = {this.props.handleDel}>{ this.props.task }</li>
		)
	}
}

export default Item;