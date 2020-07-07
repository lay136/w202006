/*
* @Author: Chen
* @Date:   2020-07-07 10:29:42
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-07 10:31:20
*/
class Controller{
	index(req,res,...args){
		res.setHeader('Content-Type', 'text/html;charset=utf-8');
		res.end('<a href="/Item/index">go todolist page</a>')
	}
}
module.exports = new Controller()