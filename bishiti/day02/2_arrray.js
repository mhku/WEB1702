//给定降序
var arr=[7,6,5,4,3,2,1];
var result=[];
for(var i=0,j=arr.length-1;i<j;i++,j--){
    result.push(arr[i]);
    result.push(arr[j]);
}
if(i==j) result.push(arr[i]);
console.log(String(result));

var arr=[1,2,4,6,7,9,10,12,15,17];

function find(sum){
    "use strict";
    for(var i=0,j=arr.length-1;i<j;){
        if(arr[i]+arr[j]==sum){
            console.log(arr[i],arr[j]);
            i++;
            j--;
        }else if(arr[i]+arr[j]<sum){
            i++;
        }else{
            j--;
        }
    }
}
find(19);
