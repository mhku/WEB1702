<?php

 $arr = ["name"=>"tom","age"=>19];
 $str = json_encode($arr);
 //echo $str;
 $list=[];
 $list[] = ["name"=>"tom","age"=>19];
 $list[] = ["name"=>"jerry","age"=>20];
 $list[] = ["name"=>"james","age"=>21];
 $str = json_encode($list);
 //echo $str;
 $arr = [10,20,100,9];
 $str = json_encode($arr);
 echo $str;
?>