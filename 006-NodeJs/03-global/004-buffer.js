/*
* @Author: Chen
* @Date:   2020-07-03 10:17:18
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 10:42:01
*/
// Buffer是用来存放二进制数据的容器(011011010)
// buffer容器中都是用十六位进制数来表示二进制数据
	
//一个数字或者字母代表两个十六进制数
// a => 10010010
const buf1 = Buffer.from('g');//<Buffer 67>
// console.log(buf1);

//8bit(位) = 1B(字节) = 2个16进制数

//1个汉字 = 3字节
const buf2 = Buffer.from('好');
// console.log(buf2);//<Buffer e5 a5 bd>

/*
	1KB = 1024B
	1MB = 1024KB
	1GB = 1024MB
	1TB = 1024GB

*/

const buf3 = Buffer.alloc(10);
buf3[0] = 0xe5;
buf3[1] = 0xaa;
buf3[9] = 0xff;
buf3[10] = 0xee;
// console.log(buf3);


const buf4 = Buffer.alloc(3);
buf4[0] = 0xe5;
buf4[1] = 0xa5;
buf4[2] = 0xbd;
console.log(buf4.toString());