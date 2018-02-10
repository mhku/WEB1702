//功能:创建web服务器接收客户请求
//     http://127.0.0.1:8080/index  准备
//     http://127.0.0.1:8080/news   准备
//     public/index.html
//     public/news.html
//     public/404.html
//1:加载http模块
const http = require("http");
const fs = require("fs");
//2:创建服务器
var server = http.createServer();
//3:绑定端口 8080
server.listen(8080);
//4:注册事件 request
//  客户端发送请求触发事件
server.on('request',function(req,res){
   //4.0:设置响应头格式
   res.setHeader('Content-Type','text/html;charset=utf-8');
   //4.1:判断客户请求地址
   var path = req.url;
   if(path==='/index'){
     //4.2 读取文件 public/index.html
     fs.readFile("./public/index.html",function(err,data){
       if(err)throw err;//若存在IO错误,抛出
       res.write(data); //发送响应数据
       res.end();       //结束发送
     });
   }else if(path==='/news'){
     //4.3 
     fs.readFile("./public/news.html",function(err,data){
       if(err)throw err;
       res.write(data);
       res.end();
     });
   }else{
     //4.4 404
     fs.readFile("./public/404.html",function(err,data){
       if(err)throw err;
       res.statusCode = 404;
       res.write(data);
       res.end();
     });
   }

});
//5:判断哪个网页  req.url

