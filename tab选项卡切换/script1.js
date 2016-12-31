
function $(id) {
    return typeof id ==='string'?document.getElementById(id):id;
}

window.onload = function () {
    //标签的索引
    var index =0;
    var timer = null;
    var lis = $('notice-tit').getElementsByTagName('li'),
        divs = $('notice-con').getElementsByTagName('div');
    if(lis.length!=divs.length) return;

    for(var i=0;i<lis.length;i++){
        lis[i].id = i;
        lis[i].onmouseover = function () {
            if(timer){
                clearTimeout(timer);
                timer=null;
            }
            var that = this.id;
           timer= setTimeout(function () {
                for (var i=0;i<lis.length;i++){
                    lis[i].className = '';
                    divs[i].style.display = 'none';
                }
                lis[that].className = 'select';
                divs[that].style.display='block';
            },500);

        }
    }
}