/**
 * Created by Administrator on 2016/11/30 0030.
 */
var data = ['iphone7', 'ipad', '三星笔记本', '佳能相机', '惠普打印机', '谢谢参与', '50元充值卡', '1000元超市购物券'];
var timer = null;
var flag = 0;

window.onload = function () {
    var play = document.getElementById('play');
    var stop = document.getElementById('stop');
    //开始抽奖
    play.onclick = playFun;
    stop.onclick = stopFun;
    //键盘事件
    document.onkeyup = function (event) {
        event=event||window.event;
        if(event.keyCode==13){
            if(flag==0){
                playFun();
                flag = 1;
            }else{
                stopFun();
                flag = 0;
            }
        }
    }
}

function playFun() {
    var title = document.getElementById('title');
    var play = document.getElementById('play');
    clearInterval(timer);
    timer = setInterval(function () {
        var random = Math.floor(Math.random() * data.length);
        title.innerHTML = data[random];
    }, 100);
   play.style.background = "#999";
}

function stopFun() {
    var play = document.getElementById('play');
    clearInterval(timer);
    play.style.background = "#49ffdf";
}