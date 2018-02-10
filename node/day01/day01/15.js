//功能:使用同步方法读取文件内容
//1:加载文件模块 17:32---17:37 练习
const fs = require("fs");
//2:读取文件内容
//同步(Synchronize)读取文件的内容
//nodejs解释器，磁盘，一个工作时，另一个等待
console.log("开始进入文件读取..");
var data = fs.readFileSync("./public/1.html");
//3:输出内容
console.log("文件读取完成");
console.log(data);
console.log(data.toString());
