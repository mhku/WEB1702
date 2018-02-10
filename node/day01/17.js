const fs=require("fs");
var str=new Date().toString();
console.log("开始文件追加内容")
fs.appendFileSync("./public/2.log",str);
console.log("文件追加内容完成");