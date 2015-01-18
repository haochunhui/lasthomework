 function javascript(){

     var swrap=document.getElementById("slider");
     var swrap1=document.getElementById("slider");//定义整个幻灯片区域为swrap
     var cursors=document.getElementById("snav").getElementsByTagName("li");
     var cursors1=document.getElementById("snav1").getElementsByTagName("li");//定义索引数组为cursor
     var imgs=document.getElementById("scont").getElementsByTagName("li");
     var imgs1=document.getElementById("scont1").getElementsByTagName("li");//定义图片数组为imgs
     var zuo=document.getElementById("tleft");//定义左箭头区域为zuo
     var you=document.getElementById("tright");//定义右箭头区域为you
     var index=0;//定义索引数组和图片数组的下标，初值为0
     
     zuo.style.display="none";
     you.style.display="none";

     for(var i=0;i<cursors.length;i++){  
          var cursor_item=cursors[i];
          var cursor_item1=cursors1[i]; 
          cursor_item.onclick=function(){
       
             for(var j=0;j<cursors.length;j++){
                 if(this.innerText==cursors[j].innerText){
                        index=j;//把点击的按钮序号给index!!!
                        break;
                   }
              }

            for(var m=0;m<imgs.length;m++){
               cursors[m].className="";
               imgs[m].style.display="none";
              }
            imgs[index].style.display="";
            cursors[index].className="selected";
         }
     
          cursor_item1.onclick=function(){
       
             for(var j=0;j<cursors1.length;j++){
                 if(this.innerText==cursors1[j].innerText){
                        index=j;//把点击的按钮序号给index!!!
                        break;
                   }
              }

            for(var m=0;m<imgs1.length;m++){
               cursors1[m].className="";
               imgs1[m].style.display="none";
              }
            imgs1[index].style.display="";
            cursors1[index].className="selected";
         }
    }


    function show(){

      for(i=0;i<cursors.length;i++){
        imgs[i].style.display="none";
        cursors[i].className="";
      }
        
        imgs[index].style.display="";
        cursors[index].className="selected";

        if(index<imgs.length-1)//使下标不断循环
          index++;
          else
          index=0;          
  }
     show();


   var timer=setInterval(show,1000);
   swrap.onmouseover=function(){
    clearInterval(timer);
    zuo.style.display="";
    you.style.display="";
   }

   swrap.onmouseout=function(){
    timer=setInterval(show,1000);
    zuo.style.display="none";
    you.style.display="none";
   }

  function getCurIndex(){
    for(var g=0;g<cursors.length;g++)
      if(imgs[g].style.display=="" && cursors[g].className=="selected")
        return g;
   }




  

  zuo.onclick=function(){
       index=getCurIndex();
       index--;
        if(index==-1){
          index=imgs.length-1;
        }

   show();
  }


  you.onclick=function(){
     index=getCurIndex();
      index++;
      if(index>(imgs.length-1)){
        index=0;
      }

   show();
  }


}

window.onload=javascript;

  