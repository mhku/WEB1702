//1:判断jquery是否加载成功
if(window.$===undefined){
  throw new Error("jquery未加载");
}
//2:添加函数
//1:jquery图片轮播版本二:
jQuery.fn.carousel = function(){
	  //2.1:创建一组变量
		 //1:每隔多久轮换一张     3000
     var interval = 1500;
		 //2:所有img类数组对象    imgList
     //  this-->获取器获取对象 #slider
     var $imgList = this.children("img"); 
		 //3:所有li组成类数组对象 liList
     var $liList = this.find("li");//[01234]
		 //4:当前显示序号         index[0 1 2 3 4]
     var index = 0;

		 //5:核心函数 lunHuan
     function lunHuan(){
		  //5.1:序号++
      index++;
			//5.2:判序>4
      (index>4)&&(index=0);
			//5.3:当前下标图片添加class active
			//    兄弟class active删除
      $imgList.eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
      //5.4:当前下标页码添加class active
			//    兄弟class active删除
      $liList.eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
     }
		 //6:启动定时器调用 lunHuan
		 //  时间
     var timer = setInterval(function(){
         lunHuan();
     },interval);

		 //7:为所有页码绑定点击事件
     $liList.click(function(){
		   //7.1 获取页码 3 
       index = parseInt($(this).html())-1;  
			 //7.2 获取当前下标图片添加class active
			     //兄弟class active删除
       $imgList.eq(index)
         .addClass("active")
         .siblings()
         .removeClass("active");
					 //获取当前页码添加class active
					 //兄弟class active删除 
        $liList.eq(index)
          .addClass("active")
          .siblings()
          .removeClass("active");
     
     });

}

