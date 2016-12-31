/**
 * Created by Administrator on 2016/12/7 0007.
 */
window.onload = function () {
    var box = document.getElementById('box');
    var oTitle = document.getElementById('title');
    var links = oTitle.getElementsByTagName('a');
    var float = document.getElementById('float');
    var oContent = document.getElementById('content');
    //var divs = oContent.getElementsByTagName('div');
    var oLeft = document.getElementById('left-a');
    var oRight = document.getElementById('right-a');
    var oMain = document.getElementById('main');
    var timer = null;
    var num1 = 0;
    var num2 = 0;
    box.onmouseover = function () {
        oLeft.style.display = 'block';
        oRight.style.display = 'block';

    }
    box.onmouseout = function () {
        oLeft.style.display = 'none';
        oRight.style.display = 'none';
    }
    for(var i=0;i<links.length;i++){
        links[i].index = i;
        links[i].onclick = function () {
            for(var j=0;j<links.length;j++){
                links[j].style.background = 'none';
            }
            this.style.background = 'red';
            startMove(oMain,{left:-this.index*700})
        }
    }
}
