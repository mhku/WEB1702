//成员方法:完成数组求和
function sum(arr){
  var result = 0;
  for(var v of arr){
    result += v;
  }
  return result;
}
function avg(arr){
  var a = sum(arr)/arr.length;
  return a;
}
module.exports.sum = sum;
module.exports.avg = avg;