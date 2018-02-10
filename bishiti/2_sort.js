//三大排序算法：冒泡，插入，快速
var arr=[4,2,1,5,3,8];
function insertSort(arr){
    "use strict";
    for(var i=1;i<arr.length;i++){
        var t=arr[i];
        var p=i-1;
        while(p>=0&&arr[p]>t){
            arr[p+1]=arr[p];
            p--;
        }
        arr[p+1]=t;
    }
}
insertSort(arr);
console.log(String(arr));


var arr=[7,2,5,4,1,3,6];
function quickSort(arr){
    if(arr.length<=1) return arr;
    var i=parseInt((arr.length-1)/2);
    var c=arr.splice(i,1)[0];
    var left=[],right=[];
    //遍历arr中剩余元素
    for(var i=0;i<arr.length;i++){
        if(arr[i]>c) right.push(arr[i]);
        else left.push(arr[i]);
    }
    return arguments.callee(left).concat(c,arguments.callee(right));
}
arr=quickSort(arr);
console.log(String(arr));