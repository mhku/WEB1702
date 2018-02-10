//加载url 模块   14:21--14:23
//1:加载url模块
const url = require("url");
var u = "https://www.jd.com:443/ad/index?uname=qd";
//将url解析js对象
var obj = url.parse(u);
console.log(obj);
//true:指定querystring.parse 对URL查询字符串进一步
var obj2 = url.parse(u,true);
console.log(obj2);