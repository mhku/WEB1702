var str="ryan is not a good man";
//ryan5 is6 not7 a8 good9 man10
var n=5;
str=str.replace(
    /\b[A-Za-z]+\b/ig, kw=>kw+n++
);
console.log(str);

//计算一个只有乘法和加法的表达式的值
//比如: 1+23*2+3*3*3
function calc(str){
    //用+切割
    var subs=str.split("+");
    var sum=0;
    //遍历subs中每个子字符串
    for(var sub of subs){
        //如果sub中没有*
        //将sub转为数字，累加到sum上
        //否则
        //再按*切割sub,保存在arr
        //定义multi=1
        //遍历arr中每个子字符串
        //将arr中当前子字符串*到multi上
        //(遍历结束)
        //将multi累加到sum上
    }
    return sum;
}
console.log(
    calc("1+23*2+3*3*3")
);
