var $ = function(x){
  return document.querySelector(x);
};
var $a = function(id){
    return document.getElementById(id);
};

function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent) {
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] = handler;
    }
}

var arrHobby=[];

function displayHobby(e){
    var hobby = $('textarea').value.trim().split(/[,，、\s]/);
    arrHobby.push(hobby);
    renderHobby(e);
    e.preventDefault();
}


function clickKeyup(){
    addEvent($('button'),'click',displayHobby);
}

function renderHobby(){
    var hobbyList='';
    for(var item in arrHobby){
        hobbyList += '<span class="numClass">' + arrHobby[item] +'</span>';
    }
    $a('hobby_list').innerHTML = hobbyList;
}

function init(){
    clickKeyup();
    renderHobby();
}
init();
/*var $ = function(x){
  return document.querySelector(x);
};
var $a = function(id){
    return document.getElementById(id);
};

function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent) {
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] = handler;
    }
}

var arrHobby=[],
    retHobby=[];


//获取textarea的值
function getHobbys(){
    var text = $('textarea').value.trim();
    if(text === ''){
        alert('输入值不能为空');
    }
    append = text.split(/[,，\s]+/);
    arrHobby.push(append);
    return arrHobby;
}

function unique(e){
    for(var i=0; i<arrHobby.length;i++){
        var item = arrHobby[i];
        if(retHobby.indexOf(item) === -1){
            retHobby.push(item);
        }
    }
    return retHobby;
}


function displayHobby(e){

    renderHobby();
    e.preventDefault();
}


function clickKeyup(){
    addEvent($('button'),'click',displayHobby);
}

function renderHobby(){
    var hobbyList='';
    for(var item in retHobby){
        hobbyList += '<span class="numClass">' + retHobby[item] +'</span>';
    }
    $a('hobby_list').innerHTML = hobbyList;

}

function init(){
    clickKeyup();
    renderHobby();
}
init();
*/
