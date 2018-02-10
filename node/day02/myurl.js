/**
* 接收一个URL字符串，解析出其中的各个不同部分
* @param path 要解析字符串,
* 形如:http://www.jd.com:80/ad/index?uname=
*   qiangdong
* @return {}  包含解析出各个url部分对象
*/
function resolve(path){
  //1:创建空对象
  var result = {};
  //2:解析出协议 http
  var i1 = path.indexOf("://");
  result.protocol = path.substring(0,i1);
  //3:解析出主机名
  var i2 = path.lastIndexOf(":");
  result.hostname = path.substring(i1+3,i2);
  //4:解析路径
  var i3 = path.indexOf("/",i2);
  result.path =  path.substring(i3);
  //5:解析端口
  result.port  = path.substring(i2+1,i3);
  return result;
}
module.exports.resolve = resolve;