//var f=function(){ var a=b=1; }
//f();
//console.log(b);//1
//console.log(window.a);//undefined
//console.log(a);//报错

//var f=function(){ var a=b=1; }
//setTimeout(f,0);
//console.log(b);//报错
////f()

var a,b=0, fn=function(){var a=b=2;};
fn();
console.log(a);//undefined
console.log(b);//2

var emp={
  work:function(){
    var sum=0;
    for(var i=0;
        i<arguments.length&&arguments[0]>0;
        i++
    ){
      sum+=arguments[i]+arguments.callee(--arguments[i])
    }
    return sum;
  }
}//arguments.callee->work
console.log(emp.work(3,2,1));

var str='ahdfdvnfdkmvmsd';
function strSm(n){
    "use strict";
    var emp='';
    for(var i=0,i=str.length;i<n;i++){
        emp+=str.charAt(Math.floor(Math.random()*i));
    }
    return emp;
}
var gbk=strSm(7);
console.log(gbk);
//var str="akdfjoweigjaldk";
var str='abdknfdlknldf';
function rdmStr(n){//定义一个函数，并传入参数n
    var emp='';   //首先 声明一个空字符串
    for(var i=0, i=str.length;i<n;i++){ //遍历str 并将str的长度保存在i中
        //随机生成大于0小于l的整数，获取当前下标位置的元素拼入emp中
        emp+=str.charAt(Math.floor(Math.random()*i));
    }
    return emp;  //return emp
}
var gbk=rdmStr(8);
console.log(gbk);


















