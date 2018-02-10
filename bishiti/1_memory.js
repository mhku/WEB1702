//函数记忆:
//什么是: 让函数记住曾经处理过的参数以及处理结果
//为什么: 避免重复计算
//何时: 今后只要一个函数，有可能反复计算时
//如何:
//如何判断一个数是质数
function isPrime1(n){
    if(n<=3) return true;
    else{
        for(var i=2;i<=Math.sqrt(n);i++){
            if(n%i==0) return false;
        }
        return true;
    }
}
//为函数添加函数记忆
var isPrime2=(function(){
    var hash={};//用于记录处理过的参数和处理结果的键值对儿——大脑
    return function(n){
        if(n<=3) return true;
        //优先尝试从hash中获取曾经计算过的参数及处理结果
        else if(hash[n]!==undefined){
            return hash[n];
        }else{//除非hash中没有记过
            for(var i=2;i<=Math.sqrt(n);i++){
                if(n%i==0){
                    //只要返回结果前，都要先将本次处理的新参数和处理结果保存到hash中,以便今后备用！
                    //n:false
                    hash[n]=false;
                    return false;
                }
            }
            hash[n]=true;
            return true;
        }
    }
})();
console.log(
    isPrime2(101),//true
    isPrime2(111) //false
);
for(var i=0,arr=[];i<1000000;i++){
    arr.push(parseInt(
        Math.random()*900+100
    ));
}
console.time("isPrime1");
for(var i=0;i<arr.length;i++){
    isPrime1(arr[i]);
}
console.timeEnd("isPrime1");
console.time("isPrime2");
for(var i=0;i<arr.length;i++){
    isPrime2(arr[i]);
}
console.timeEnd("isPrime2");
