<?php
  //功能:查询manager/t_user (email/regtime)
  //1:创建连接，设置编码
  require('init.php');
  //2:创建sql 发送sql
  $sql = "SELECT email,regtime FROM t_user";
  $result = mysqli_query($conn,$sql);
  //3:抓取所查询多条记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $html = '';
  foreach($rows as $k=>$v){
     $html .= "<li>$v[email]:$v[regtime]</li>";
  }
  echo $html; 
?>