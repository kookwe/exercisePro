
//根据ID返回dom元素
//var $ = function(id){return document.getElementById(id);}
//返回dom元素的当前某css值
var getCss = function(obj,name){
    if(obj.currentStyle) {//for ie ;
        return obj.currentStyle[name];
    }else { // for ff;
        var style = document.defaultView.getComputedStyle(obj,null);
        return style[name];
    }
}

var show = function(obj,attr,speed/*,fn*/){
    if (speed==0) {
        obj.style.display = 'block';
        return;
    }
    var initH = 0 , initW = 0;
    //获取dom的宽与高
    var oWidth = getCss(obj,'width').replace('px',''),
        oHeight = getCss(obj,'height').replace('px','');
    //每次dom的递减数(等比例)
    var wcut = 2*(+oWidth.replace('px','') / +oHeight.replace('px','')),hcut =5;
    //处理动画函数
    var process = function(){
        obj.style.overflow = 'hidden';
        obj.style.display = 'block';
        initW = (initW+wcut) > oWidth ? oWidth : initW+wcut;
        initH = (initH+hcut) > oHeight ? oHeight : initH+hcut;
        //判断是否减完了

        if(initW !== oWidth || initH !== oHeight) {
            //obj.style.width = initW+'px';
            obj.style.height = initH+'px';

            setTimeout(function(){process();},speed);
        }else {
            //加完后，设置属性为显示以及原本dom的宽与高;
            //obj.style.width = oWidth+'px';
            obj.style.height = oHeight+'px';
            /*if(fn){
             fn.call(obj);
             }*/
        }
    }
    process();
}
