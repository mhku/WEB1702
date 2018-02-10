//Buffer模块全局模块，可以直接使用无需引入

//计算机常用容量单位
//1:字节  byte
//1024b =  1kb  [千字节]
//1024kb = 1mb [兆字节]
//1024mb = 1gb [吉字节]
//1024gb = 1tb [梯]
//1024tb = 1pb 


//1:创建大小为1024字节缓冲区
var buf1 = Buffer.alloc(1024);
console.log(buf1);
console.log(buf1.length);

//2:创建3KB大小缓冲区 14:44-14:46
var buf2 = Buffer.alloc(1024*3);
console.log(buf2);

//3:创建一个数组初始化缓冲区
var buf3 = Buffer.from([1,2,3,4,5]);
console.log(buf3);

//4:创建一个字符串缓冲区
var buf4 = Buffer.from("一二三");
console.log(buf4);
console.log(buf4.toString());