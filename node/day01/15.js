//同步方法读取文件的内容
const fs=require("fs");
console.log("开始读取文件");
var data=fs.readFileSync("./public/1.html");
console.log("文件读取完成");
console.log(data);
console.log(data.toString());