var ba=getClass("ba")//图片
var lunbo=getClass('lun');//轮播
var banner=getClass('banner')//大盒子	
var margbox=getClass("margbox")[0];
    //alert(ba.length)
  var num=0;
  var back=0;
 function  move(type) {
 	if (type=="r") {
  		num++;
  		if (num>=ba.length) {
  		num=0}}

  	else if(type=="l"){
  		 num--;
  		 if(num<=-1){
  		 num=4	
  		 }

 } ba[num].style.left="750px";
    if (num==ba.length-1){
    ba[num].style.left="-750px";
    }
  animate(ba[num],{left:0});
  animate(ba[back],{left:-750})

 for (var i = 0; i < ba.length; i++) {
  	// ba[i].style.opacity=0;
     
  	lunbo[i].style.background="black"
    ba[i].style.zIndex=0
  };
   // ba[num].style.opacity=1;
   lunbo[num].style.background="red";
   ba[num].style.zIndex=1;
   margbox.style.zIndex=1;
   left.style.zIndex=1;
   right.style.zIndex=1;
   back=num;  	
    // animate(ba[num],{opacity:1},600,Tween.Linear)
}
var t=setInterval(function(){move("r")},3000)//匿名函数

//滑上图片后停止，移开后启动  
 for (var j = 0; j <banner.length; j++) {
   banner[j].index=j;
   banner[j].onmouseover=function(){
   	      clearInterval(t);
   	      left.style.display="block"  
   	      right.style.display="block"
   	 this.onmouseout=function(){
   	    t=setInterval(function(){move("r")},3000);
   	    left.style.display="none"  
   	    right.style.display="none"
 
}
}
}
// 滑上轮播后切换
for (var i = 0; i <lunbo .length; i++) {
	lunbo[i].index=i;
	lunbo[i].onmouseover=function(){
	for (var j = 0; j <ba .length; j++) {
 
		 // ba[j].style.opacity=0;
      if (j>=this.index) {
       ba[j].style.left="750px"
    }else{
      ba[j].style.left="0"
    }	  
    lunbo[j].style.background="black";
    ba[j].style.zIndex="0";
		}
		// ba[this.index].style.opacity=1;
		this.style.background="red";
    if (this.index==0) {
      ba[ba.length-1].style.left="0"}

      ba[this.index].style.zIndex="1"

     if(this.index!=ba.length-1){
        animate(ba[this.index],{left:0},function(){
        ba[ba.length-1].style.left="-750px"  
          })
    }else{
      animate(ba[this.index],{left:0})
    }
    margbox.style.zIndex="1";
    left.style.zIndex="1";
    right.style.zIndex="1";

		num=this.index	
	}
}
//左右按键
var  left=getClass("banner-left")[0];
  //    left.onclick=function(){
  //    num--;	
  //    if (num<=-1) {
  //      num=4	
  //    }
  //   for (var i = 0; i < ba.length; i++) {
  // 		ba[i].style.opacity=0;
  // 		lunbo[i].style.background="black"
  // }
  // 	lunbo[num].style.background="red";  	
  //   animate(ba[num],{opacity:1},600,Tween.Linear)
  //    }

left.onclick=function(){
    move("l")
  }
var right=getClass("banner-right")[0];
   right.onclick=function(){
   move("r")} 

//**********************************************
//  导航滑动
var ce=getClass("cebiankuang")[0];//侧边框大盒子
// alert(ce);
var cc=getClass("cc")//各层从1——20
// alert(cc.length)
var dh=getClass("daohangbox")[0];

// alert(dh)
var da=getClass("bigdf");  //20个大盒子
// alert(da.length)
var now=0;
document.onscroll=function(){
var tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
// document.title=tops;
   if (tops>220) {
   	  dh.id="fixed"
   }
   if (tops<220) {
   	  dh.id=""
   }
//顶部导航滑动结束
//显示隐藏侧导航
  if (tops>590) {
      ce.style.display="block"
   }
  if (tops<590) {
      ce.style.display="none"
  }
//楼层滑动样式
  for (var i = 0; i <da .length; i++) {//对楼层进行遍历
      if (da[i].offsetTop<=tops+35) {//每一个楼层到最页面最顶端的距离
      for (var j = 0; j <cc.length; j++) {  //遍历小边框
       cc[j].style.background="#ffffff";   //去除小边框样式
       cc[j].style.color="black"  
  }
       cc[i].style.background="#e5374d";  //给每个边框增加滑动到楼层后的样式
       cc[i].style.color="#ffffff";
       now=i; //保留下标  滑动显示的楼层与点击后获取的下标一样 都可以赋值
  }
  }

  
//图片按需加载
var ch=document.documentElement.clientHeight;
// alert(ch);
 for (var i = 0; i < da.length; i++) {
   if (da[i].offsetTop<=tops+ch){
    var imgs=$("img",da[i]);
    // alert(imgs.length);
  for (var j=0; j<imgs.length; j++) {
    var src=imgs[j].getAttribute("date-src");
    imgs[j].src=src;
  }
   }
 }
var  backtop=getClass("backtop")[0];
// alert(backtop)
backtop.onclick=function(){
   animate(backtop,{tops:0})
} 
}  
//滑动结束 实现
//点击楼层跳转

document.body.scrollTop=1;  //解决兼容问题  火狐 谷歌
var obj=document.body.scrollTop?document.body:document.documentElement;
for (var i = 0; i <cc.length; i++) {//对点击侧边框遍历
     cc[i].index=i;//下标
     cc[i].onclick=function(){  //给侧小边框添加点击事件
      // obj.scrollTop=da[this.index].offsetTop-20;
      //obj.scrollTop页面高度，da[this.index].offsetTop各个楼层高度
      //点击后效果，每个楼层的高度与页面高度相差20px，
      //让其点击后显示到当前楼层.
      animate(obj,{scrollTop:da[this.index].offsetTop-20})
      for (var j = 0; j <da.length; j++) {
         cc[j].style.background="#ffffff"; 
         cc[j].style.color="black" 
         //遍历楼层，去除各个小侧边框的点击效果
     }
         this.style.background="#e5374d";
         this.style.color="#ffffff"
        // for循环外添加单个小边框点击后的效果
     }
    cc[i].onmouseover=function(){//划入小盒子样式
       for (var j= 0; j < cc.length; j++) {
          if(j!=now){
          //保留点击后遗留的效果 使其滑动到其他小盒子的样式不受影响
            cc[j].style.background="#ffffff";
            cc[j].style.color="black"
       }
       }
             this.style.background="#e5374d";
             this.style.color="#ffffff"
             this.style.cursor="pointer"//小手
    }
    cc[i].onmouseout=function(){
        if (this.index!=now) {
          //保留点击后遗留的效果 使其滑出后点击遗留的样式不受影响
            this.style.background="#ffffff";
            this.style.color="black"
    }      
    }
    
}



// banner侧边框选项卡
var   duoxuan=$(".fang")[0];
var   xuan=$(".firstone");


var   ka=$(".box");
       // alert(ka.length);
 for (var i = 0; i < xuan.length; i++) {
    xuan[i].index=i;
xuan[i].onmouseover=function(){
      for (var j = 0; j <ka.length; j++) {

        ka[j].style.display="none";
      
      }

   
      ka[this.index].style.display="block";
     }
xuan[i].onmouseout=function(){
    var   ziti=$("strong",xuan[this.index]);
       ka[this.index].style.display="none";
       }
     } 


 //登录下拉框
 var deng=getClass("weidenglu")[0];
 var  yuan=getClass("yuang")[0];
 var  denglu=$(".denglu")[0];
 var  kuang=$("ul",deng)[0];

// var   biaoti=$("ul",deng)[0];
  // alert(biaoti)
 yuan.onmouseover=deng.onmouseover=function(){
   
   denglu.style.display="block";
   kuang.style.display="block";
   deng.style.display="block";
  animate(yuan,{width:240},100,Tween.Linear,function(){
});
  // animate(deng,{height:340},300,Tween.Linear);
  deng.style.height="340px";
}
yuan.onmouseout=deng.onmouseout=function(){
   
  denglu.style.display="none";
   kuang.style.display="none";
   deng.style.display="none";
   animate(yuan,{width:210},100,Tween.Linear);
// animate(deng,{height:0},300,Tween.Linear);
    deng.style.height="0px";
} 


 //下拉菜单
 var wzdh=$(".dandu")[0];
 // alert(wzdh.length)
 var gezi=$(".gezi")[0];
 hover(wzdh,function(){
   gezi.style.display="block";


},function(){
  gezi.style.display="none"
})

var shangjia=$(".shangjia")[0];
var  xiala=$(".xiala")[0];
 hover(shangjia,function(){
  xiala.style.display="block";

 },function(){
   xiala.style.display="none";
 })
var mato=$(".taobao")[0];
var  ma=$(".mato")[0];
// alert(ma.length)
hover(mato,function() {
  ma.style.display="block";
},function(){
  ma.style.display="none";
})
var  shoucang=$(".shoucang")[0];
var  baby=$(".baby")[0];
hover(shoucang,function(){
  baby.style.display="block";
},function(){
  baby.style.display="none"
})


//右侧导航
var  rightsm=getClass("rightsm");
var  rightce=getClass("rightce");
// alert(rightsm.length)
 for (var i = 0; i < rightsm.length; i++) {
   rightsm[i].index=i;

hover(rightsm[i],function(){
   var  lis=$("li",rightce[this.index]);
     // alert(this.index)
   lis[0].style.display="block";
    lis[0].style.right="45px";
    animate(lis[0],{right:35},100)
 },function(){
    lis=$("li",rightce[this.index]);
  
    lis[0].style.display="none" 
 }) }

rightce[7].onclick=function(){
  var   obj={st:tops}
       animate(this,{st:0},function(){
        speed:1000,
        window.scrollTop(obj.st)
        })
  
}
