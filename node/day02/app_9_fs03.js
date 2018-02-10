//1:加载文件模块
const fs = require("fs");
//js解释器不会等待点击事件发生，而直接执行
/**
console.log(1);
btn1.onclick = function(){
  console.log(2);
}
console.log(3);
btn2.onclick = function(){
  console.log(4);
}
console.log(5);
*/
//异步(Asynchronize)写文件中内容
//Nodejs解释器  磁盘 可以同时工作
//public/1.html 读取内容
var str = new Date().toString();
fs.writeFile("./public/4.log",str,function(err){
  console.log(err);
});