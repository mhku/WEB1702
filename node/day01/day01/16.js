//同步写内容到文件

//1:加载对应文件模块   17:44--17:49
const fs = require("fs");
//2:将日期字符串写入文件中
var str = new Date().toString();
console.log("开始文件写操作");
//如果当前文件不存在，自动创建
fs.writeFileSync("./public/1.log",str);
console.log("文件写入完成");