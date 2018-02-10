//同步向文件追加数据

//1:加载文件模块 
const fs = require("fs");
//2:追加字符串 日期对象字符串
//  fs.appendFileSync(file,str)
var str = new Date().toString();
console.log("向文件追加内容开始");
fs.appendFileSync("./public/2.log",str);
//3:输出
console.log("向文件追加内容结束");