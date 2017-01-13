var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];


(function() {

    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */

    //用sort方法排序
    aqiData.sort(function (a,b){
      return b[1] - a[1];
    });

    var hanZi = ["一","二","三","四","五","六","七","八","九","十"];
    var oUl = document.getElementById("aqi-list");
    oUl.innerHTML = "";

    //遍历并添加到ul中
    for(var i=0;i<aqiData.length;i++){
      if(aqiData[i][1] > 60){
        var li = document.createElement("li");
        li.innerHTML = "第" + hanZi[i] + "名:" + aqiData[i][0] + "," + aqiData[i][1];
        oUl.appendChild(li);
      }
    }

})();
