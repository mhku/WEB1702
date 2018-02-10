//引入自定义url模块
const url1 = require("./myurl");
//console.log(url1);
var p = "http://www.jd.com:8080/ad/index?uname=qd";
var obj = url1.resolve(p);
console.log(obj);
