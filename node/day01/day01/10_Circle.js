//当前模块三个成员
//1:常量
const PI = 3.14;
//2:二个方法
//计算面积
function getSize(r){
  return PI * r * r; 
}
//计算周长
function getPerimeter(r){
  return PI * r * 2;
}
//导出当前模块的内部成员，供其它模块使用
//exports.size = getSize;
//exports.perimeter = getPerimeter;

//导出当前模块 node提供二种
module.exports.size = getSize;
module.exports.perimeter = getPerimeter;

//Nodejs底层代码 exports = module.exports
//module.exports 全称
//exports        简写
