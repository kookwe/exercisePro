/**
 * Created by Administrator on 2016/12/8 0008.
 */
/*获取样式，兼容IE678，
不能用background这样的符合样式，单一样式可写为backgroundColor
不能获取为设置的样式
*/
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}


/*运动框架*/
function startMove(obj,json,fn){
    var flag = true;//假设所有目标都到达目标值
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr in json){


            //1.取当前的值
            var icur = 0;
            if(attr =='opacity'){
                icur = Math.round(parseFloat(getStyle(obj, attr))*100);
            }else{
                icur=parseInt(getStyle(obj, attr));
            }
            //2.算速度
            var speed = (json[attr]-icur)/3;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            //3.检测停止
            if(icur!=json[attr]){
                flag = false;
            }
            if(attr=='opacity'){
                obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
                obj.style.opacity =(icur+speed)/100;
            }else{
                obj.style[attr]=icur+speed+"px";
            }

        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30);
}


/*抖动框架*/
function Shake(obj,attr,fn){
    var pos = parseInt(getStyle(obj,attr));
    var arr = [];
    var num = 0;
    var shake = null;
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(obj.shake);//shake相当于timer;
    shake = setInterval(function () {
        obj.style[attr] = pos+arr[num]+'px';
        num++;
        if(num ==arr.length){
            clearInterval(obj.shake);
            fn&&fn();
        }
    },50)
}


/*兼容非标准IE getbyclassname*/
function getElementsByClassName(parent,tagName,className) {
    var aEls = parent.getElementsByTagName(tagName);
    var arr = [];
    for(var i=0;i<aEls.length;i++){
        var aClassName = aEls[i].className.split(' ');
        for(var j=0;j<aClassName.length;j++){
            if(aClassName[j]==className){
                arr.push(aEls[i]);
                break;
            }
        }
    }
    return arr;
}


/*添加classname*/
function addClass(obj,className) {
    if(obj.className==''){
        //原来没有classname
        obj.className = className;
    }else {
        //原来有classname

        var arrClassName = obj.className.split(' ');
        var _index = arrIndexOf(arrClassName,className);
        if(_index==-1){
            //如果要添加的class在原来的class中不存在
            obj.className+=''+className;
        }
        //如果要添加的class在原来的class中存在
    }
}

/*移除class*/
function removeClass(obj,className) {
    //原来有class
    if(obj.className!=''){
        var arrClassName = obj.className.split(' ');
        var _index = arrIndexOf(arrClassName,className);
        //如果有要移除的class
        if(_index!=-1){
           arrClassName.splice(_index,1);
           obj.className = arrClassName.join(' ');
        }
        //如果要添加的class在原来的class中存在
    }
}


function arrIndexOf(arr,v) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==v){
            return i;
        }
    }
    return -1;
}

/*绑定事件*/
function bind(obj, evname, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evname, fn, false);
    } else {
        obj.attachEvent('on' + evname, function() {
            fn.call(obj);
        });
    }
}