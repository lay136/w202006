/*
* @Author: Chen
* @Date:   2020-07-17 15:59:03
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-20 09:23:19
*/
	/*
	options = {
		page:当前显示的页码,
		model:查询集合的名称,
		query:查询条件,
		projection:投影,
		sort:排序,
		populates:关联查询
	}

	*/

async function pagination(options){
	/*
		分页:具体显示哪一页page由前台传入
		约定:每一页显示几条数据:limit = 2
		第一页显示： 1-2  skip (1-1)*2
		第二页显示： 3-4	 skip (2-1)*2
		第三页显示： 5-6	 skip (3-1)*2
		......
		第n页显示：       skip (page-1)*limit

	*/
	let { page,model,query,projection,sort,populates } = options;
	const limit = 2;
	if(isNaN(page)){
		page = 1;
	}
	//上一页边界控制
	if(page == 0){
		page = 1
	}

	const counts = await model.countDocuments(query);
	let pages = Math.ceil(counts/limit);
	//下一页边界控制
	if(page >= pages){
		page = pages;
	} 
	if(page == 0){
		page = 1;
	}
	//生成页码数
	let list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i);
	}
	//跳过数据的条数
	let skip = (page-1)*limit;

	//关联查询
	let result = model.find(query,projection);
	if(populates){
		populates.forEach(function(populate){
			result = result.populate(populate)
		})
	}

	const docs = await result.sort(sort).skip(skip).limit(limit);

	return {
		docs:docs,
		page:page,
		list:list,
		pages:pages
	}
	
}

module.exports = pagination;