/***
 *UI主线程给Worker线程发消息
 */

onmessage = function(e){
  console.time('质数计算');
  var n = e.data; //接收UI线程发来的消息数据
  var result = isPrime(n);
  console.timeEnd('质数计算');
  console.log(n+'是质数吗：'+result);
}

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