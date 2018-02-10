<?php
 //添加留言
 //1:获取参数
 $c = $_REQUEST['content'];
 $u = $_REQUEST['uname'];
 //2:创建连接
 $conn = mysqli_connect("127.0.0.1","root","",'msg');
 //3:设置编码
 mysqli_query($conn,"SET NAMES UTF8");
 //4:创建sql INSERT ,发送
 $sql = "INSERT INTO t_msg VALUES(null,'$c','$u')";
 $result = mysqli_query($conn,$sql);
 //5:判断结果正确
 if($result===true){
   echo "添加成功";
 }else{
   echo "添加失败";
 }
?>