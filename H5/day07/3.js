/***
 *耗时的JS：不取决于代码行数，而取决于逻辑复杂度
 * 循环嵌套、深度递归调用.... 如：加解密、天气预报、导航计算、大数质数判定....
 */

console.time('质数计算');
var n = 999999999;
var result = isPrime(n);
console.timeEnd('质数计算');
console.log(n+'是质数吗：'+result);

function isPrime(num){
  /***模拟出耗时5s+效果***/
  var start = new Date().getTime();
  do{
    var now = new Date().getTime();
  }while(now-start<=5000);
  /*********************/

  num = parseInt(num);//JS中整数最大只能到10位
  for(var i=2; i<num; i++){
    if(num%i === 0){
      break;
    }
  }
  if(i<num){
    return false;
  }else {
    return true;
  }
}