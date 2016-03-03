/**
 * Created by Administrator on 2016/3/3.
 */
window.onload = function(){
    //容器对象
    var box = document.getElementById("container");

    //获取图片对象集合
    var imgs =document.getElementsByName("img");

    //设置单张图片的宽度
    var imgWidth =imgs[0].offsetWidth;

    //设置图片隐藏宽度
    var exub = 160;

    //设置容器总宽度
    var allWidth = imgWidth+(imgs.length-1)*exub;
    box.style.width=allWidth+"px"

    //设置每个门的定位
    function setImgspos(){
        for(var i=1, len= imgs.length; i<len; i++){
            imgs[i].style.left=imgWidth + exub * (i-1)+"px";
        }
    }
}
    setImgsPos();