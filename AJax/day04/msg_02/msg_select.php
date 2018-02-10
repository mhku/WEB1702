<?php
  //1:连接数据库
  //2:设置编码
  require('init.php');
  //3:创建sql SELECT ... 发送
  $sql = "SELECT * FROM t_msg";
  $result = mysqli_query($conn,$sql);
  //4:抓取全部记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<!doctype html>
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
     <h1>留言列表</h1>
	 <table border="1" width="100%">
	  <thead>
	    <tr>
		  <td>编号</td>
		  <td>内容</td>
		  <td>发表人</td>
		  <td>操作</td>
		</tr>
	  </thead>
	  <tbody id="tb1">
	   <?php
	     foreach($rows as $k=>$v){
            echo "<tr>";
			echo "<td>$v[mid]</td>";
			echo "<td>$v[content]</td>";
			echo "<td>$v[uname]</td>";
			echo "<td>
			<a href='$v[mid]' 
			class='btn-delete'>删除</a>
			</td>";
			echo "</tr>";
		 }
	   ?>
	  </tbody>
	 </table>
    <script src="jquery-1.11.3.js"></script>
    <script>
	  //1:获取所有删除按钮 10:33-10:43
	  //2:绑定点击事件
      $(".btn-delete").click(function(e){
	   //3:在事件内部
	   //4:阻止事件默认行为
	   e.preventDefault();
	   //5:获取留言编号
	   //6:创建确认框      confirm()
       var mid = $(this).attr("href");
	   var rs = window.confirm("您确认要删除吗?");
	   //7:如果用户点击 是
	   //8:自动跳转 'msg_delete.php?mid='+	  
	   if(rs){
	     location.href = 'msg_delete.php?mid='+mid;
	   }
	  
	  });

	</script>


  </body>
  </html>