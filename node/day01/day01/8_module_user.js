//用户模块文件
var userCount = 98;
var userLogout = function(){
  console.log("userLogout");
}
var age = 100;
//对外公开一些自己内部成员
exports.userCount = userCount;
exports.userLogout = userLogout;