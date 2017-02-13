//获取ID
//复写
/*var $ = function(id){
    return document.getElementById(id);
};*/

var $ = function(id){
    return document.getElementById(id);
};
//跨浏览器添加事件
/*function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if( element.attachEvent){
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] = handler;
    }
}*/

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
var arrNum =[];

//获取并判断input的输入值
/*function inputValue(){
    var value = $('numinput').value.trim();
    if( value === ''){
        alert('输入值不能为空！');
        return NaN;
    }else if(!value.match(/^\d+$/)){
        alert('请输入整数！');
        return NaN;
    }else{
        return Number(value);
    }
}*/

function inputValue(){
    var value = $('numinput').value.trim();
    if( value === ''){
        alert('输入值不能为空!');
        return NaN;
    }else if (!value.match(/^\d+$/)) {
        alert('请输入整数!');
        return NaN;
    }else{
        return Number(value);
    }
}

//初始化函数

//左侧入
/*function btnLeftIn(){
    var num =inputValue();
    if(isNaN(num)) {
        return;
    }
    arrNum.unshift(num);
    renderNums();
}*/
function btnLeftIn(){
    var num = inputValue();
    if(isNaN(num)){
        return;
    }
    arrNum.unshift(num);
    renderNums();
}


//右侧入
/*function btnRightIn(){
    var num =inputValue();
    if(isNaN(num)) {
        return;
    }
    arrNum.push(num);
    renderNums();

}*/
function btnRightIn(){
    var num = inputValue();
    if(isNaN(num)){
        return;
    }
    arrNum.push(num);
    renderNums();
}


//左侧出
/*function btnLeftOut(){
    if(arrNum.length === 0){
        alert('没有数字可供删除!');
        return;
    }
    var del = confirm('删除左边第一个数字'+arrNum[0]+'吗？');
    if(del){
        arrNum.shift();
        renderNums();
    }
}*/
function btnLeftOut(){
    if(arrNum.length === 0){
        alert('没有数字可以删除！');
        return;
    }
    var del = confirm('删除左边第一个数字' + arrNum[0] + '吗？');
    if(del){
        arrNum.shift();
        renderNums();
    }
}


//右侧出
/*function btnRightrOut(){
    if(arrNum.length === 0){
        alert('没有数字可供删除!');
        return;
    }

    var del = confirm("删除右边第一个数字" + arrNum[arrNum.length-1] + "吗？");
    if (del) {
        arrNum.pop();
        renderNums();
    }
}*/

function btnRightrOut(){
    if(arrNum.length === 0){
        alert('没有数字可供删除！');
    }
    var del = confirm('删除右边第一个数字' + arrNum[arrNum.length-1] + '吗？');
    if(del){
        arrNum.pop();
        renderNums();
    }
}

//添加点击事件
/*function btnClick(){
    addEvent($('leftin'),'click',btnLeftIn);
    addEvent($('rightin'),'click',btnRightIn);
    addEvent($('leftout'),'click',btnLeftOut);
    addEvent($('rightout'),'click',btnRightrOut);
}*/
function btnClick(){
    addEvent($('leftin'),'click',btnLeftIn);
    addEvent($('rightin'),'click',btnRightIn);
    addEvent($('leftout'),'click',btnLeftOut);
    addEvent($('rightout'),'click',btnRightrOut);
}



//输出数字
/*function renderNums(){
    var list='';
    for ( var item in arrNum ){
        list += '<div class="numClass" > '+arrNum[item] +'</div>';
    }
    $('numcontainer').innerHTML = list;
}*/
function renderNums(){
    var list='';
    for(var item in arrNum){
        list += '<div class="numClass">' + arrNum[item] +'</div>';
    }
    $('numcontainer').innerHTML = list;

}


//运行
/*function init(){
    btnClick();
    renderNums();
}
init();
*/

function init(){
    btnClick();
    renderNums();
}
init();
