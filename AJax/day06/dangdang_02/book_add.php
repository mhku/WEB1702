<?php
//1:修改响应数据类型
header("Content-Type:text/plain;charset=utf-8");
//2:获取所有参数
@$n = $_REQUEST['bname'] or die("-2");
@$p = $_REQUEST['pic'] or die("-3");
@$r = $_REQUEST['price']or die("-4");
@$d = $_REQUEST['pubtime']or die("-5");
//3:连接数据库 设置编码
require("init.php");
//4:创建sql    发送sql
$sql = "INSERT INTO dd_book VALUES(null,'$n','$p',$r,'$d')";
$result = mysqli_query($conn,$sql);
//5:判断输出
if($result===false){
  echo "-1";
}else{
  //获取连接执行insert语句->id	 
  echo mysqli_insert_id($conn);
}

			  