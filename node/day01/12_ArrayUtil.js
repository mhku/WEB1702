function sum(arr){
  var result=0;
  for (var v of arr){
    result+=v;
  }
  return result;
}
function avg(arr){
  var a=sum(arr)/arr.length;
}
module.exports.sum=sum;
module.exports.avg=avg;