const http=require("http");
const express=require("express");
var app=express();
//var server=http.createServer(app);
//server.listen(8080);
http.createServer(app).listen(8080);
//创建中间件函数ml
function ml(req,res,next){
    "use strict";
    console.log("访问时间是:"+new Date());
    next();
}
//ml({},{},function(){});
app.use(ml);
app.get("/",(req,res)=>{
    "use strict";
    res.send("<h1>index</h1>");
});
app.get("/admin",(req,res)=>{
    "use strict";
    res.send("<h1>admin</h1>");
});