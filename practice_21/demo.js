//获取id
var $ = function(id){
    return document.getElementById(id);
};
var hobbyBtn = document.getElementsByTagName('button')[0];

//跨浏览器获取事假
function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent) {
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] = handler;
    }
}

//创建接收数组

var arrTag = [],
    arrHobby = [];

//初始化函数

//输入
function displayTag(){
    var tag =  $('tag_input').value.trim();
    arrTag.push(tag);
    renderTag();
}

function displayHobby(e){
    var hobby = $('hobby_input').value.trim();
    arrHobby.push(hobby);
    renderHobby();
    e.preventDefault();
    e.stopPropagation();
}

//添加事件

function clickKeyup() {
    addEvent(hobbyBtn,'click',displayHobby);
    addEvent($('tag_input'),'keyup',function(event){
        event = event || window.event;
        if(event.keyCode === 13){
            displayTag();
        }
    });
}

//渲染

function renderTag(){
    var tagList='';
    for(var item in arrTag){
        tagList += '<span class="numClass">' + arrTag[item] +'</span>';
    }
    $('tag_list').innerHTML = tagList;
}

function renderHobby(){
    var hobbyList='';
    for(var item in arrHobby){
        hobbyList += '<span class="numClass">' + arrHobby[item] +'</span>';
    }
    $('hobby_list').innerHTML = hobbyList;
}

//初始化
function init(){
    clickKeyup();
    renderTag();
    renderHobby();
}
init();
