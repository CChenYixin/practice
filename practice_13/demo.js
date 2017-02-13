//IIFE
/*(function() {
    // var button = document.getElementById("button");
    // var weatherInput = document.getElementById("aqi-input");
    // var weatherDisplay = document.getElementById("aqi-display");
    // button.onclick = function que() {
    //     weatherDisplay.innerHTML = weatherInput.value;
    // }
    //取得id
    var $ =function(id){
        return document.getElementById(id);
    };
    //核心函数
    var handler = function(){
        var num = parseInt($('aqi-input').value);
        if((!isNaN(num)) &&  (num>=0) && (num<=1000)){
            $('aqi-display').innerHTML = num;
        }else{
            alert($('aqi-input').value + '不是有效的AQI数值，请重新输入0-1000的有效整数');
        }
    };
    //鼠标事件
    $('button').onclick = function(){
        handler();
    };
    //键盘事件
    $('aqi-input').onkeyup = function(event){
        event = event || window.event ;
        if(event.keyCode === 13){
            handler();
        }
    };
})();*/

//复写
//IIFE
(function(){

//获得ID
var $ = function(id){
    return document.getElementById(id);
};

//核心函数
    var handler = function(){
        //转化成整数
            var num = parseInt($('aqi-input').value);
            if((!isNaN(num)) && (num>=0) && (num<=1000)){
                $('aqi-display').innerHTML = num;
            }else{
                alert($('aqi-input').value + '不是有效的AQI数值，请重新输入0-1000的有效整数');
            }
        };

    //鼠标时间
    $('button').onclick = function(){
        handler();
    };

    //键盘事件
    $('aqi-input').onkeyup = function(event){
        event = event || window.event;
        if(event.keyCode === 13){
            handler();
        }
    };

})();
