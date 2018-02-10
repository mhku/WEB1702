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
//异步(Asynchronize)复制文件中内容
//Nodejs解释器  磁盘 可以同时工作
//public/4.log 读取内容
//public/5.log 写入
//15:35--15:40
fs.readFile("./public/4.log",function(err,data){
   if(err){
      console.log("读取失败");
      console.log(err);
   }else{
      fs.writeFile("./public/5.log",data,function(err){
          if(err){
            console.log("写操作失败");
          }
      });
   }
});


