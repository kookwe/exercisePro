function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {
    //标签的索引
    var index = 0;
    var timer = null;
    var lis = $('notice-tit').getElementsByTagName('li'),
        divs = $('notice-con').getElementsByTagName('div');
    if (lis.length != divs.length) return;

    for (var i = 0; i < lis.length; i++) {
        lis[i].id = i;
        lis[i].onmouseover = function () {
            clearInterval(timer);
            var that = this.id;
            get(that);
        }
        lis[i].onmouseout = function () {
            autoPlay()
        }
    }

    if(timer){
        clearInterval(timer);
        timer = null;
    }
    function autoPlay() {
        timer = setInterval(function () {
            index++;
            if (index >= 5) {
                index = 0;
            }
            get(index);
        }, 2000);
    }
    function get(curindex) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
            divs[i].style.display = 'none';
        }
        lis[curindex].className = 'select';
        divs[curindex].style.display = 'block';
        index =curindex;
    }
    autoPlay();
}