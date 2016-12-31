/**
 * Created by Administrator on 2016/12/26 0026.
 */
function getclass (classname,tagname){
    if(tagname){
        var arr = [];
        var node = document.body.getElementsByTagName(tagname);
        for(var i = 0;i < node.length;i++){
            if(node[i].className == classname){
                arr.push(node[i]);
            }
        }
        return arr;
    }else{
        if(document.getElementsByClassName){
            return document.body.getElementsByClassName(classname);
        }else{
            var arr = [];
            var node = document.body.getElementsByTagName('*');
            for(var i = 0;i <node.length;i++){
                if(node[i].className == classname){
                    arr.push(node[i]);
                }
            }
            return arr;
        }
    }
}