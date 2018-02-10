const http = require('http');
const express = require('express');

var app = express();  //请求处理函数
http.createServer(app).listen(8080); //创建Web服务器

/******向客户端输出静态资源********/
app.get('/stat.html', (req, res)=>{
  res.sendFile(__dirname+'/stat.html');
})
app.get('/js/jquery-1.11.3.js', (req, res)=>{
  res.sendFile(__dirname+'/js/jquery-1.11.3.js');
})
/*******向客户端输出动态数据*******/
app.get('/stat',(req, res)=>{
  var data = [          //要向客户端输出的数据——JS数组
    {label: '部门1', value: 400},
    {label: '部门2', value: 300},
    {label: '部门3', value: 450},
    {label: '部门4', value: 250},
    {label: '部门5', value: 550},
    {label: '部门6', value: 500}
  ];
  res.json(data); //把JS数组转换为JSON字符串，输出给客户端
})