<?php
  //1:获取参数 mid
  $mid = $_REQUEST['mid'];
  //2:连接数据库
  //3:设置编码
  require('init.php');
  //4:创建SQL DELETE 发送
  $sql = "DELETE FROM t_msg WHERE mid=$mid";
  $result = mysqli_query($conn,$sql);
  //4.1:多增加一个判断条件
  //    删除记录影响行数 == 0没有删除
  $size = mysqli_affected_rows($conn);
  //5:判断
  if($result===true&&$size>0){
    echo "删除成功";
  }else{
    echo "删除失败";
  }
?>