const fs=require("fs");
var str=new Date().toString();
console.log("开始文件的写操作")
fs.writeFileSync("./public/1.log",str);
console.log("文 件写入完成");