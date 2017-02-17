/*var $  = function(id){
    return document.getElementById(id);
};
function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent){
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] =handler;
    }
}*/

var input = document.getElementsByTagName('input'),
    preBtn = input[0],
    inBtn = input[1],
    postBtn = input[2],
    treeRoot = document.getElementById('root'),
    divList = [],
    timer = null;

window.onload = function(){
        preBtn.onclick = function () {
    	    render();
    		preOrderRec(treeRoot);
    		changeColor();
    	};
    	inBtn.onclick = function () {
    	    render();
    		inOrderRec(treeRoot);
    		changeColor();
    	};
    	postBtn.onclick = function () {
    	    render();
    		postOrderRec(treeRoot);
    		changeColor();
    	};

};

//前序
function preOrderRec(node){
    if(node){
        divList.push(node);
        preOrderRec(node.firstElementChild);
        preOrderRec(node.lastElementChild);
    }
}
//中序
function inOrderRec(node){
    if(node){
        inOrderRec(node.firstElementChild);
        divList.push(node);
        inOrderRec(node.lastElementChild);
    }
}
//后序
function postOrderRec(node){
    if(node){
        postOrderRec(node.firstElementChild);
        postOrderRec(node.lastElementChild);
        divList.push(node);
    }
}


//颜色变化
function changeColor(){
    var i = 0;
    divList[i].style.backgroundColor = '#333';
    timer = setInterval(function(argument){
        i++;
        if(i< divList.length){
            divList[i-1].style.backgroundColor = '#fff';
            divList[i].style.backgroundColor = '#333';
        }else{
            clearInterval(timer);
            divList[divList.length-1].style.backgroundColor='#fff';
        }
    },1000);
}

//初始化
function render(){
    divList = [];
    clearInterval(timer);
    var divs = document.getElementsByTagName('div');
    for ( var i = 0; i<divs.length;i++){
        divs[i].style.backgroundColor = '#fff';
    }
}
