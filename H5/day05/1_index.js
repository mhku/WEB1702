const http = require('http');
const express = require('express');

var app = express();  //请求处理函数
http.createServer(app).listen(8080); //创建Web服务器
app.use(express.static("./public"));
app.get('/stat.html', (req, res)=>{
    res.sendFile(__dirname+'/stat.html');
});
app.get('/js/jquery-1.11.3.js', (req, res)=>{
    res.sendFile(__dirname+'/js/jquery-1.11.3.js');
});
app.get('/stat',(req,res)=>{
    "use strict";
    var data=[
        {lable:'html',value:3},
        {lable:'css',value:5},
        {lable:'js',value:6},
        {lable:'dom',value:7},
        {lable:'jquery',value:9},
        {lable:'vue',value:2},
        {lable:'NG',value:6},
        {lable:'AJAX',value:8},
        {lable:'PHP',value:6.6},
        {lable:'Node.js',value:9.5},
        {lable:'HTML5',value:5.5}
    ];
    res.json(data);
});