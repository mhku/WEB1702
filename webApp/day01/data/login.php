<?php
header("Content-type:application/json");
$name=$_REQUEST['name'];
			  $result['tip']='欢迎'.$name;
			  echo json_encode($result);
?>