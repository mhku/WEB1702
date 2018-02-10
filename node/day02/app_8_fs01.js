//实现文件同步拷贝
const  fs = require("fs");

var src = './public/2.log';
var des = './public/3.log';

console.log("读取文件开始");
var buf = fs.readFileSync(src);
console.log("读取完成");
console.log("写内容开始");
fs.writeFileSync(des,buf);
console.log("写内容结束");