const http=require("http");
const express=require("express");
var app=express();
//var server=http.createServer(app);
//server.listen(8080);
http.createServer(app).listen(8080);
app.use(express.static("/public/10"));