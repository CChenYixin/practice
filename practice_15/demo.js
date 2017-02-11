/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */


/*function getData() {
    var oUl = document.getElementById('source');
    var data = [];

    for(var i= 0;i<oUl.childElementCount;i++){
        var oLi = oUl.children[i];
        var city = oLi.innerHTML.split('空气质量')[0];
        var num = Number( oLi.children[0].innerHTML);
        data.push([city,num]);
    }
    return data;
}*/
//复写

function getData(){
    var oUl = document.getElementById('source');
    var data = [];

    for(var i=0;i<oUl.childElementCount;i++){
        var oLi = oUl.children[i];
        var city = oLi.innerHTML.split('空气质量')[0];
        var num = Number(oLi.children[0].innerHTML);

        data.push([city,num]);
    }
    return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
/*function sortAqiData(data) {
    data.sort(function(a,b){
        return a[1] - b[1];
    });
    return data;
}*/

function sortAqiData(data){
    data.sort(function(a,b){
        return a[1] -b[1];
    });
    return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
/*function render(data) {
    var ulList = document.getElementById('resort');
    var cnum = ["一","二","三","四","五","六","七","八","九","十"];
    for(var i= 0;i<data.length;i++){
        var li = document.createElement("li");
        li.innerHTML = '第' + cnum[i] + '名：' + data[i][0] + "空气质量<b>" + data[i][1] +"</b>";
        ulList.appendChild(li);
    }
}*/
function render(data){
    var ulList = document.getElementById('resort');
    var cnum = ['一','二','三','四','五','六','七','八','九','十'];

    for(var i=0;i<data.length;i++){
        var li = document.createElement('li');
        li.innerHTML = '第' + cnum[i] +'名：' + data[i][0] +'空气质量<b>' +data[i][1]+'</b>';
        ulList.appendChild(li);
    }
}

/*function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}*/

function btnHandle(){
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);

}

/*function init() {
    var btn = document.getElementById("sort-btn");
    btn.onclick = btnHandle;
}
init();*/

function init(){
    var btn = document.getElementById('sort-btn');
    btn.onclick = btnHandle;
}
init();
