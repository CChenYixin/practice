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
}
*/
function addEvent(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent){
        element.attachEvent('on'+type,handler);
    }else{
        element['on'+type] =handler;
    }
}


//创建接收数组
var arrNum =[];

//生成随机数组
/*function randomBulidData(){
    arrNum = [];
    for (var i =0;i<60;i++){
        var num = Math.ceil(Math.random()*91+9);
        arrNum.push(num);
    }
    renderNums();
}*/
function randomBulidData(){
    arrNum = [];
    for(var i=0;i<60;i++){
        var num = Math.ceil(Math.random()*91+9);
        arrNum.push(num);
    }
    renderNums();
}



//获取并判断input的输入值
/*function inputValue(){
    var value = $('numinput').value.trim();
    if( value === ''){
        alert('输入值不能为空！');
        return NaN;
    }else if(!value.match(/^([1-9][0-9]|100)$/)){
        alert('请输入范围在10-100的整数！');
        return NaN;
    }else{
        return Number(value);
    }
}*/
function inputValue(){
    var value = $('numinput').value.trim();
    if (value === ''){
        alert('输入的值不能为空！');
        return NaN;
    }else if (!value.match(/^([1-9][0-9]|100)$/)) {
        alert('请输入范围在10-100的整数');
        return;
    }else{
        return Number(value);
    }
}


//初始化函数

//左侧入
/*function btnLeftIn(){
    var num =inputValue();
    if(arrNum.length >=60){
        alert('数据已满！');
        return;
        }
    if(isNaN(num)) {
        return;
        }
    arrNum.unshift(num);
    renderNums();
}*/
function btnLeftIn(){
    var num = inputValue();
    if(arrNum.length >=60){
        alert('数据已满');
        return;
    }
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
    if(arrNum.length >=60){
        alert('数据已满');
        return;
    }
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
        alert('没有数字可供删除！');
        return;
    }
    var del = confirm('删除左边第一个数字' + arrNum[0] + '吗');
    if(del){
        arrNum.shift();
        renderNums();
    }
}



//右侧出
function btnRightrOut(){
    if(arrNum.length === 0){
        alert('没有数字可供删除!');
        return;
    }
    var del = confirm("删除右边第一个数字" + arrNum[arrNum.length-1] + "吗？");
    if (del) {
        arrNum.pop();
        renderNums();
    }
}





//排序算法
/*function visual(){
    var timer = null;
    timer = setInterval(bubbleSort,25);
    function bubbleSort(){
        var swapSignal = true;
        if(swapSignal){
            swapSignal = false;
            for(i = 0; i <arrNum.length-1;i++){
                if(arrNum[i]>arrNum[i+1]){
                    var temp = arrNum[i];
                    arrNum[i] = arrNum[i+1];
                    arrNum[i+1] = temp;
                    swapSignal = true;
                    renderNums();
                }
            }
        } else {
            clearInterval(timer);
            return;
        }
    }
}*/

function visual(){
    var timer = null;
    timer =setInterval(bubbleSort,25);
    function bubbleSort(){
        var swapSignal =  true;
        if (swapSignal){
            for(i = 0;i<arrNum.length-1;i++){
                if(arrNum[i]>arrNum[i+1]){
                    var temp = arrNum[i];
                    arrNum[i] = arrNum[i+1];
                    arrNum[i+1] =temp;
                    swapSignal =true;
                    renderNums();
                }
            }
        }else {
            clearInterval(timer);
            return;
        }
    }
}




// function bubbleSort() {
//     var i = 0,j = 1,temp;
//             len = arrNum.length;
//             timer = null;
//     timer = setInterval(run,10);
//     function run() {
//         if (i < len) {
//             if (j < len) {
//                 if (arrNum[i] > arrNum[j]) {
//                     temp = arrNum[i];
//                     arrNum[i] = arrNum[j];
//                     arrNum[j] = temp;
//                     renderNums();
//                 }
//                 j++;
//             } else {
//                 i++;
//                 j = i + 1;
//             }
//         } else {
//             clearInterval(timer);
//             return;
//         }
//     }
// }

//添加点击事件
function btnClick(){
    addEvent($('leftin'),'click',btnLeftIn);
    addEvent($('rightin'),'click',btnRightIn);
    addEvent($('leftout'),'click',btnLeftOut);
    addEvent($('rightout'),'click',btnRightrOut);
    addEvent($('randomdata'),'click',randomBulidData);
    addEvent($('sort'),'click', visual);
}

//输出数字
/*function renderNums(){
    var list='';
    for ( var item in arrNum ){
        list += '<div class="numClass" style="height:' +arrNum[item] + 'px; background-color:#5DAC81" ></div>';
    }
    $('numcontainer').innerHTML = list;
}*/
function renderNums(){
    var list='';
    for (var item in arrNum){
        list += '<div class="numClass" style="height:' +arrNum[item] + 'px; background-color:#5DAC81" ></div>';
    }
    $('numcontainer').innerHTML = list;
}


//运行
function init(){
    btnClick();
    renderNums();
}
init();
