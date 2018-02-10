// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError //ReferenceError(引用错误) 对象表明一个不存在的变量被引用
let bar = 2;