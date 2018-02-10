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
exports.size = getSize;
exports.perimeter = getPerimeter;