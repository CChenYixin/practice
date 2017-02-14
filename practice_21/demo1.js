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

function displayHobby(){
    var hobby = $('textarea').value.trim();
    arrHobby.push(hobby);
    renderHobby();
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
