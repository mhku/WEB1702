$(function(){

//功能1：读取上一页面保存 cookie
//用户名和用户编号
//解析uid和uname若没有则必须跳回"登录页面"
//1:读取cookie所有数据以; 拆分为数组
//  [loginUid=1][loginUname=qd]
  var cookieArray = document.cookie.split("; ");
//2:创建空对象
  var cookieObject = {};
//3:循环获取数组中每一个键和值 
  for(var i=0;i<cookieArray.length;i++){
    var pair = cookieArray[i].split("=");
    var key = pair[0];//loginUname
    var val = pair[1];//qd
    cookieObject[key]=val;
  }
//4:保存在对象中
//5:循环外
//  如果当前对象中没有uid跳转登录页面
if(!cookieObject.loginUid){
  location.href = "productlist.html";
}



//14:50--15:00
//功能3：页面加载完成后，异步请求
//当前登录用户购物车中商品信息
//data/shoppoingcartlist_06.php
//参数 uid = 1
//返回json-->js 对象
//拼接字符串 #cart tbody tr->tr->tr
$.ajax({
  url:'data/shoppoingcartlist_06.php',
  data:{uid:cookieObject.loginUid},
  success:function(data){
    //#拼字符串
    //1:创建变量html =""
    var html = "";
    //2:循环拼接所有标签
    $.each(data,function(i,obj){
        html += `
<tr>
<td>
<input type="checkbox"/>
<input type="hidden" value="1" />
<div><img src="${obj.pic}" alt=""/></div>
</td>
<td><a href="">${obj.pname}</a></td>
<td>${obj.price}</td>
<td>
<button>-</button>
 <input type="text" value="${obj.count}"/>
<button>+</button>
</td>
<td><span>${obj.price*obj.count}</span></td>
<td><a href="${obj.cid}">删除</a></td>
</tr>

        `;
    });
    //3:循环外将html赋值,tbody
    $("#cart tbody").html(html);

  }
});



});