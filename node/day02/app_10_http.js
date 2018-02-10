//1:加载http模块 http
const http = require("http");
//2:创建http 服务器
var server = http.createServer();
//3:为服务器绑定监听端口 8080
//端品有效范围: 1023---65535
server.listen(8080);
//4:为http服务器注册事件 request
server.on('request',function(req,res){
   //解析客户发来请求消息
   console.log("请求方法:"+req.method);
   console.log("请求地址:"+req.url);
   console.log("协议版本:"+req.httpVersion);
   console.log("请求头部:"+req.headers);
   //给出响应
   //console.log(res);
   res.statusCode = 200;   //设置服务器响应状态码
   res.setHeader('Content-Type','text/html');
   res.write('<html>');//向客户端输出响应消息
   res.write('<body><h1>hello nodejs</h1></body>');
   res.write('</html>');
   res.end();//##通知客户端，响应消息结束


});
