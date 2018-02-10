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
//异步(Asynchronize)读取文件中内容
//Nodejs解释器  磁盘 可以同时工作
//public/1.html 读取内容 15:23--15:28
console.log("1:开始读成取文件内容...");
fs.readFile('./public/2.log',function(err,data){
   if(err){
      console.log("文件读取出现错误");
      //console.log(err);
      if(err.code==='ENOENT'){
        console.log("文件不存在");
      }
   }else{
      console.log("文件读取成功");
      console.log(data.toString());
   }
});
console.log("2:js脚本执行完成");