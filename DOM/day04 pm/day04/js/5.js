var pop=document.getElementById("pop");
pop.addEventListener("click",function(){
  alert("今晚308,w84u");
});
var PSIZE=200,
    MAXTOP=innerHeight-PSIZE,
    MAXLEFT=innerWidth-PSIZE;
var t=parseInt(
      Math.random()*(MAXTOP+1)),
    l=parseInt(
      Math.random()*(MAXLEFT+1));
pop.style.cssText=
  "top:"+t+"px;left:"+l+"px";
//为pop绑定鼠标进入事件
pop.addEventListener("mouseover",
  function(e){
    while(true){
      var t=parseInt(
          Math.random()*(MAXTOP+1)
        ),
        l=parseInt(
          Math.random()*(MAXLEFT+1)
        );
      var x=e.clientX, y=e.clientY;
      //如果新位置不包含鼠标的位置
      if(!(x>=l&&x<=l+PSIZE
            &&y>=t&&y<=t+PSIZE)){
        pop.style.cssText=
          "top:"+t+"px;left:"+l+"px";
        break;
      }
    }
  }
);