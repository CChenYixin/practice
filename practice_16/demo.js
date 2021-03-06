/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
// var aqiData = {};
//复写
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
/*function addAqiData() {
    var cityStr = document.getElementById('aqi-city-input').value.trim();
    var numStr = document.getElementById('aqi-value-input').value.trim();

    if(!cityStr.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert('城市名称必须为汉字或英文字符！');
        return;
    }
    if(!numStr.match(/^\d+$/)){
        alert('空气质量指数必须为整数');
        return;
    }
    aqiData[cityStr] = numStr;
}*/

function addAqiData(){
    var cityStr = document.getElementById('aqi-city-input').value.trim();
    var numStr = document.getElementById('aqi-value-input').value.trim();

    if(!cityStr.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert('城市名称必须为汉字或英文字符！');
        return;
    }
    if(!numStr.match(/^\d+$/)){
        alert('空气质量指数必须是整数');
        return;
    }
    aqiData[cityStr]  = numStr;
}
/**
 * 渲染aqi-table表格
 */
/*function renderAqiList() {
    var table = document.getElementById('aqi-table');
    table.innerHTML='';
    for( var cityStr in aqiData){
        if( table.children.length ===0){
            table.innerHTML = '<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr> ';
        }
        var tr = document.createElement('tr');
        var cityTd = document.createElement('td');
        cityTd.innerHTML = cityStr;
        tr.appendChild(cityTd);
        var numTd =document.createElement('td');
        numTd.innerHTML = aqiData[cityStr];
        tr.appendChild(numTd);
        var btnTd = document.createElement('td');
        btnTd.innerHTML = '<button>删除</button>';
        tr.appendChild(btnTd);
        table.appendChild(tr);
    }

}*/

function renderAqiList() {
    var table = document.getElementById('aqi-table');
    table.innerHTML = '';

    for(var cityStr in aqiData){
        if(table.children.length === 0){
            table.innerHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
        }
        var tr = document.createElement('tr');
        var cityTd = document.createElement('td');
        cityTd.innerHTML = cityStr;
        tr.appendChild(cityTd);
        var numTd =document.createElement('td');
        numTd.innerHTML =aqiData[cityStr];
        tr.appendChild(numTd);
        var btnTd =document.createElement('td');
        btnTd.innerHTML = '<button>删除</button>';
        tr.appendChild(btnTd);
        table.appendChild(tr);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
/*function addBtnHandle() {
  addAqiData();
  renderAqiList();
}
*/
function addBtnHandle(){
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
/*function delBtnHandle(target) {
  // do sth.
  var table = target.parentElement.parentElement;
  var cityStr = table.children[0].innerHTML;
  delete aqiData[cityStr];
  renderAqiList();
}
*/
function delBtnHandle(target){
    var table = target.parentElement.parentElement;
    var cityStr = table.children[0].innerHTML;
    delete aqiData[cityStr];
    renderAqiList();
}



/*function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn = document.getElementById('add-btn');
  addBtn.onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

  var table = document.getElementById('aqi-table');
  table.addEventListener('click',function(event){
      if(event.target && event.target.nodeName === 'BUTTON'){
          delBtnHandle(event.target);
      }
  });
}
init();*/


function init() {
    var addBtn = document.getElementById('add-btn');
    addBtn.onclick = addBtnHandle;

    var table =document.getElementById('aqi-table');
    table.addEventListener('click',function(event){
        if(event.target && event.target.nodeName === 'BUTTON'){
            delBtnHandle(event.target);
        }
    });
}
init();
