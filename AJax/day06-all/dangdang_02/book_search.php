<?php
  //0:修改响应头消息 text/html
  header("Content-Type:text/html;charset=utf-8");
  //1:获取用户输入参数???
  @$kw = $_REQUEST['kw'] or die("搜索关键字是必须的");
  //2:连接数据库 设置编码
  require("init.php");
  //3:创建sql    发送sql
  $sql = "SELECT bname FROM dd_book";
  $sql .= " WHERE bname LIKE  '%$kw%'";
  //4:抓取多行记录
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //5:<li>...</li>
  $html = "";
  foreach($rows as $k=>$v){
	  $bname = $v['bname'];
	  $html .= "<li>$bname</li>";
  }
  echo $html;
?>