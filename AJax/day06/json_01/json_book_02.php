<?php
  //1:连接数据库 设置编码
  require("init.php");
  $sql = "SELECT * FROM dd_book";
  $result = mysqli_query($conn,$sql);
  //2:创建sql 发送sql语句
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //3:将数组转换json字符串
  $str = json_encode($rows);
  echo $str;
?>