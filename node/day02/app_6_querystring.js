//querystring 原生模块
const qs = require('querystring');

var str = "uname=tom&upwd=123&pno=36&kw=js";
//把客户端传给node.js服务器的查询字符串解析
//容易使用对象
var obj = qs.parse(str);
console.log(obj);
console.log(obj.uname);
//把一个js对象转换为查询字符串
//var obj2 = {ename:"强东",age:20,addr:"bj"};
//var str = qs.stringify(obj2);
//console.log(str);